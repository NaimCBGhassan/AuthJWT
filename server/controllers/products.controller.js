export const getProducts = async (req, res) => {
  res.json("Productos");
};

export const getProductsById = async (req, res) => {
  res.json("Producto");
};

export const createProducts = async (req, res) => {
  res.json("create");
};

export const updateProducts = async (req, res) => {
  res.json("update");
};

export const deleteProducts = async (req, res) => {
  res.json("delete");
};
