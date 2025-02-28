import express, {Request, Response} from "express";
import path from "path";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../front/dist/front/browser/index.html"));
});

export default router;