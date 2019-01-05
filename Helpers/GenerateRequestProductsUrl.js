const GenerateRequestProductsUrl = (mainUrl, page, limit, sort) =>
  `${mainUrl}/api/products${page || limit || sort ? `?` : ""}${
    page ? `_page=${page}&` : ""
  }${limit ? `_limit=${limit}&` : ""}${sort ? `_sort=${sort}` : ""}`;

export default GenerateRequestProductsUrl;
