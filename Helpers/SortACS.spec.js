import SortASC from "./SortACS";

describe("Sorting Products by Size in ASC format", () => {
  const products = [
    {
      id: "84671-362cwdi5qn3",
      size: 17,
      price: 466,
      face: "( .-. )",
      date: "Thu Jan 03 2019 14:21:49 GMT+0330 (Iran Standard Time)"
    },
    {
      id: "24566-mpxi3s6umta",
      size: 36,
      price: 442,
      face: "( .o.)",
      date: "Tue Jan 01 2019 12:36:46 GMT+0330 (Iran Standard Time)"
    },
    {
      id: "42394-qw4t98frtca",
      size: 16,
      price: 553,
      face: "( `·´ )",
      date: "Thu Dec 20 2018 11:16:47 GMT+0330 (Iran Standard Time)"
    },
    {
      id: "95829-kp450zwqet",
      size: 34,
      price: 372,
      face: "( ° ͜ ʖ °)",
      date: "Fri Dec 21 2018 00:38:14 GMT+0330 (Iran Standard Time)"
    }
  ];
  const sortedBySize = [
    {
      id: "42394-qw4t98frtca",
      size: 16,
      price: 553,
      face: "( `·´ )",
      date: "Thu Dec 20 2018 11:16:47 GMT+0330 (Iran Standard Time)"
    },
    {
      id: "84671-362cwdi5qn3",
      size: 17,
      price: 466,
      face: "( .-. )",
      date: "Thu Jan 03 2019 14:21:49 GMT+0330 (Iran Standard Time)"
    },

    {
      id: "95829-kp450zwqet",
      size: 34,
      price: 372,
      face: "( ° ͜ ʖ °)",
      date: "Fri Dec 21 2018 00:38:14 GMT+0330 (Iran Standard Time)"
    },
    {
      id: "24566-mpxi3s6umta",
      size: 36,
      price: 442,
      face: "( .o.)",
      date: "Tue Jan 01 2019 12:36:46 GMT+0330 (Iran Standard Time)"
    }
  ];

  const sortedByPrice = [
    {
      id: "95829-kp450zwqet",
      size: 34,
      price: 372,
      face: "( ° ͜ ʖ °)",
      date: "Fri Dec 21 2018 00:38:14 GMT+0330 (Iran Standard Time)"
    },

    {
      id: "24566-mpxi3s6umta",
      size: 36,
      price: 442,
      face: "( .o.)",
      date: "Tue Jan 01 2019 12:36:46 GMT+0330 (Iran Standard Time)"
    },
    {
      id: "84671-362cwdi5qn3",
      size: 17,
      price: 466,
      face: "( .-. )",
      date: "Thu Jan 03 2019 14:21:49 GMT+0330 (Iran Standard Time)"
    },
    {
      id: "42394-qw4t98frtca",
      size: 16,
      price: 553,
      face: "( `·´ )",
      date: "Thu Dec 20 2018 11:16:47 GMT+0330 (Iran Standard Time)"
    }
  ];

  it("should sort in ascending sort on size property", () => {
    expect(SortASC(products, "size")).toEqual(sortedBySize);
  });
  it("should sort in ascending sort on price property", () => {
    expect(SortASC(products, "price")).toEqual(sortedByPrice);
  });
});
