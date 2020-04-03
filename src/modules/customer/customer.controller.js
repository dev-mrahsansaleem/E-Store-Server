import * as Yup from "yup";

import { PROVIDED_ENEM } from "./customer.module";

export const create = async (req, res) => {
  const { token, provider } = req.body;

  const bodySchema = Yup.object().shape({
    token: Yup.string().required(),
    provider: Yup.string()
      .oneOf(PROVIDED_ENEM)
      .required()
  });

  try {
    await bodySchema.validate({ token, provider });

    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
