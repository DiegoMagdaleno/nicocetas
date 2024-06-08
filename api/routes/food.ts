import express, { Request, Response } from "express";
import axios from "axios";
import { Food } from "../model/food";
const router = express.Router();

function processResult(data: any[]): Food[] {
  const processIngredients = (data: any): string[] => {
    return Object.keys(data)
      .filter((key) => key.includes("strIngredient") && data[key] !== "")
      .map((key) => data[key]);
  };
  return data.map((item) => {
    return {
      name: item.strMeal,
      category: item.strCategory,
      area: item.strArea,
      instructions: item.strInstructions,
      thumbnail: item.strMealThumb,
      ingredients: processIngredients(item),
    };
  });
}

router.get("/:food", (req: Request, res: Response) => {
  const target = req.params.food as string;
  axios
    .get(`https://themealdb.com/api/json/v1/1/search.php?s=${target}`)
    .then((response) => {
      return res.json(processResult(response.data.meals));
    })
    .catch((error) => {
      return res.json(error);
    });
});

router.get("/cat/categories", (req: Request, res: Response) => {
  axios
    .get("https://themealdb.com/api/json/v1/1/categories.php")
    .then((response) => {
      return res.json(response.data.categories);
    })
    .catch((error) => {
      return res.json(error);
    });
});

router.get("/filter/:category", (req: Request, res: Response) => {
  const category = req.params.category;
  axios
    .get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => {
      return res.json(response.data.meals);
    })
    .catch((error) => {
      return res.json(error);
    });
});

export default router;
