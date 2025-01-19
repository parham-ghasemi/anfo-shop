const { useState, useEffect } = React;

const allProducts = [
  {
    id: 1,
    price: 240.00,
    discountedPrice: 96.99,
    badge: "Hot",
    name: "Sherpa Jacket",
    category: "Girls, Jacket",
    image: "./images/clothes/card1.png",
    rating: 4,
    brand: "Chanel",
    releaseDate: "2024-09-25", // Over 90 days ago
    size: "freesize",
    availableColors: ["pink", "blue", "green"],
    seller: "Zara",
    availability: true
  },
  {
    id: 2,
    price: 119.99,
    discountedPrice: null,
    badge: null,
    name: "Bootcut Jeans",
    category: "Girls, Jeans",
    image: "./images/clothes/card2.png",
    rating: 5,
    brand: "Prada",
    releaseDate: "2024-12-13", // 26 days ago
    size: "0-3",
    availableColors: ["red", "purple"],
    seller: "Bloomingdale",
    availability: false
  },
  {
    id: 3,
    price: 115.00,
    discountedPrice: 56.99,
    badge: "Hot",
    name: "Fleece Hoodie",
    category: "Boys, Sweatshirts",
    image: "./images/clothes/card3.png",
    rating: 4,
    brand: "Gucci",
    releaseDate: "2024-09-30", // Over 90 days ago
    size: "3-6",
    availableColors: ["yellow", "teal"],
    seller: "Nordstrom",
    availability: true
  },
  {
    id: 4,
    price: 79.99,
    discountedPrice: null,
    badge: null,
    name: "Long Shirt Top",
    category: "Boys, Shirts",
    image: "./images/clothes/card4.png",
    rating: 3,
    brand: "Burberry",
    releaseDate: "2024-12-28", // 11 days ago
    size: "6-9",
    availableColors: ["olive", "violet", "orange"],
    seller: "Amazon",
    availability: false
  },
  {
    id: 5,
    price: 134.50,
    discountedPrice: null,
    badge: null,
    name: "Tommy Flag T-Shirt",
    category: "Boys, T-Shirts",
    image: "./images/clothes/card5.png",
    rating: 5,
    brand: "Nike",
    releaseDate: "2024-08-05", // Over 90 days ago
    size: "9-15",
    availableColors: ["blue", "pink"],
    seller: "Zappos",
    availability: true
  },
  {
    id: 6,
    price: 69.99,
    discountedPrice: null,
    badge: null,
    name: "Pullover Hoodie",
    category: "Boys, Hoodie",
    image: "./images/clothes/card6.png",
    rating: 4,
    brand: "Adidas",
    releaseDate: "2024-12-23", // 16 days ago
    size: "15-20",
    availableColors: ["green", "yellow"],
    seller: "Neiman Marcus",
    availability: false
  },
  {
    id: 7,
    price: 119.99,
    discountedPrice: null,
    badge: null,
    name: "Long Graphic",
    category: "Girls, T-Shirts",
    image: "./images/clothes/card7.png",
    rating: 3,
    brand: "Calvin Klein",
    releaseDate: "2024-09-10", // Over 90 days ago
    size: "20-30",
    availableColors: ["purple", "olive"],
    seller: "Saks Fifth Avenue",
    availability: true
  },
  {
    id: 8,
    price: 140.00,
    discountedPrice: 76.99,
    badge: "Hot",
    name: "Sherpa Jacket",
    category: "Girls, Jacket",
    image: "./images/clothes/card8.png",
    rating: 4,
    brand: "Louis Vuitton",
    releaseDate: "2025-01-02", // 6 days ago
    size: "freesize",
    availableColors: ["teal", "blue", "pink"],
    seller: "ASOS",
    availability: true
  },
  {
    id: 9,
    price: 40.00,
    discountedPrice: null,
    badge: null,
    name: "Watch",
    category: "Men, Watch",
    image: "./images/clothes/card9.jpg",
    rating: 4,
    brand: "Ralph Lauren",
    releaseDate: "2024-09-15", // Over 90 days ago
    size: "0-3",
    availableColors: ["orange", "red"],
    seller: "Zara",
    availability: false
  },
  {
    id: 10,
    price: 10.00,
    discountedPrice: null,
    badge: null,
    name: "Yellow Dress",
    category: "Women",
    image: "./images/clothes/card10.jpg",
    rating: 5,
    brand: "Chanel",
    releaseDate: "2024-12-31", // 8 days ago
    size: "3-6",
    availableColors: ["yellow", "green"],
    seller: "Amazon",
    availability: true
  },
  {
    id: 11,
    price: 40.00,
    discountedPrice: null,
    badge: null,
    name: "Black Dress",
    category: "Women",
    image: "./images/clothes/card11.jpg",
    rating: 4,
    brand: "Prada",
    releaseDate: "2024-09-12", // Over 90 days ago
    size: "6-9",
    availableColors: ["blue", "violet", "pink"],
    seller: "Nordstrom",
    availability: false
  },
  {
    id: 12,
    price: 85.00,
    discountedPrice: null,
    badge: null,
    name: "Women's Sneakers",
    category: "Women, Sneaker, shoes",
    image: "./images/clothes/card12.jpg",
    rating: 5,
    brand: "Gucci",
    releaseDate: "2024-11-23", // 46 days ago
    size: "9-15",
    availableColors: ["teal", "red"],
    seller: "Bloomingdale",
    availability: true
  },
  {
    id: 13,
    price: 14.00,
    discountedPrice: null,
    badge: null,
    name: "Men's Shirt",
    category: "Men",
    image: "./images/clothes/card13.jpg",
    rating: 3,
    brand: "Burberry",
    releaseDate: "2024-12-06", // 33 days ago
    size: "15-20",
    availableColors: ["olive", "orange"],
    seller: "Zappos",
    availability: false
  },
  {
    id: 14,
    price: 300.00,
    discountedPrice: null,
    badge: null,
    name: "Men's Outdoor Fleece",
    category: "Men",
    image: "./images/clothes/card14.jpg",
    rating: 4,
    brand: "Nike",
    releaseDate: "2025-01-05", // 3 days ago
    size: "20-30",
    availableColors: ["purple", "yellow"],
    seller: "Neiman Marcus",
    availability: true
  },
  {
    id: 15,
    price: 30.00,
    discountedPrice: null,
    badge: null,
    name: "FROGG TOGGS Men's Pro Lite Rain Suit",
    category: "Men",
    image: "./images/clothes/card15.jpg",
    rating: 3,
    brand: "Adidas",
    releaseDate: "2024-08-30", // Over 90 days ago
    size: "freesize",
    availableColors: ["green", "red"],
    seller: "Saks Fifth Avenue",
    availability: true
  },
  {
    id: 16,
    price: 250.00,
    discountedPrice: null,
    badge: null,
    name: "Men's Striped Shirt",
    category: "Men",
    image: "./images/clothes/card16.jpg",
    rating: 1,
    brand: "Calvin Klein",
    releaseDate: "2025-01-01", // 7 days ago
    size: "0-3",
    availableColors: ["pink", "blue"],
    seller: "ASOS",
    availability: false
  },
  {
    id: 17,
    price: 85.00,
    discountedPrice: null,
    badge: null,
    name: "Nike Men's Sneakers",
    category: "Women, Sneaker, shoes",
    image: "./images/clothes/card17.jpg",
    rating: 2,
    brand: "Gucci",
    releaseDate: "2024-11-23", // 46 days ago
    size: "9-15",
    availableColors: ["teal", "red"],
    seller: "Bloomingdale",
    availability: true
  },
  {
    id: 18,
    price: 85.00,
    discountedPrice: null,
    badge: null,
    name: "Dr. Marten's Boot",
    category: "Men, Sneaker, shoes",
    image: "./images/clothes/card18.jpg",
    rating: 5,
    brand: "Gucci",
    releaseDate: "2024-11-23", // 46 days ago
    size: "9-15",
    availableColors: ["teal", "red"],
    seller: "Bloomingdale",
    availability: true
  },
  {
    id: 19,
    price: 85.00,
    discountedPrice: null,
    badge: null,
    name: "Dr. Marten's Boot",
    category: "Men, Sneaker, shoes",
    image: "./images/clothes/card19.jpg",
    rating: 1,
    brand: "Gucci",
    releaseDate: "2024-11-23", // 46 days ago
    size: "9-15",
    availableColors: ["teal", "red"],
    seller: "Bloomingdale",
    availability: true
  },
  {
    id: 20,
    price: 40.00,
    discountedPrice: null,
    badge: null,
    name: "Watch",
    category: "Men, Watch",
    image: "./images/clothes/card20.jpg",
    rating: 3,
    brand: "Ralph Lauren",
    releaseDate: "2024-09-15", // Over 90 days ago
    size: "0-3",
    availableColors: ["orange", "red"],
    seller: "Zara",
    availability: false
  },
  {
    id: 21,
    price: 40.00,
    discountedPrice: null,
    badge: null,
    name: "Watch",
    category: "Watch",
    image: "./images/clothes/card21.jpg",
    rating: 1,
    brand: "Ralph Lauren",
    releaseDate: "2024-09-15", // Over 90 days ago
    size: "0-3",
    availableColors: ["orange", "red"],
    seller: "Zara",
    availability: false
  },
  {
    id: 22,
    price: 40.00,
    discountedPrice: null,
    badge: null,
    name: "Watch",
    category: "Watch",
    image: "./images/clothes/card22.jpg",
    rating: 2,
    brand: "Ralph Lauren",
    releaseDate: "2024-09-15", // Over 90 days ago
    size: "0-3",
    availableColors: ["orange", "red"],
    seller: "Zara",
    availability: false
  },
];



function MainSection() {

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [ratingFilter, setRatingFilter] = useState(null);
  const [brandFilters, setBrandFilters] = useState([]);
  const [sellerFilter, setSellerFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState({ min: null, max: null });
  const [customPriceFilter, setCustomPriceFilter] = useState({ min: null, max: null });
  const [availabilityFilter, setAvailabilityFilter] = useState(null);
  const [releaseDateFilter, setReleaseDateFilter] = useState(null);
  const [sizeFilter, setSizeFilter] = useState(null)


  useEffect(() => {
    setFilteredProducts(allProducts);
    handleNewBadge();
    categoryFilter ? filterByCategory() : null;
    ratingFilter ? filterByRating() : null;
    brandFilters.length ? filterByBrand() : null;
    priceFilter ? filterByPrice() : null;
    availabilityFilter ? filterByAvailability() : null;
    sellerFilter.length ? filterBySeller() : null;
    colorFilter ? filterByColor() : null;
    releaseDateFilter ? filterByDate() : null;
    sizeFilter ? filterBySize() : null;
  }, [categoryFilter, ratingFilter, brandFilters, priceFilter, availabilityFilter, sellerFilter, colorFilter, releaseDateFilter, sizeFilter])



  function changeCategoryFilter(filter) {
    setCategoryFilter(filter.toLocaleLowerCase());
  }
  function filterByCategory() {
    const filterRegex = new RegExp(`\\b${categoryFilter}\\b`, 'i'); // 'i' makes it case-insensitive
    setFilteredProducts(
      allProducts.filter(product => filterRegex.test(product.category))
    );
  }

  function changeRatingFilter(rating) {
    setFilteredProducts(allProducts)
    setRatingFilter(rating);
  }
  function filterByRating() {
    setFilteredProducts((prevFilteredProducts) => prevFilteredProducts.filter(product => product.rating >= ratingFilter))
  }

  function ChangeBrandFilter(item) {
    setBrandFilters((prevBrandFilters) => {
      if (prevBrandFilters.includes(item)) {
        return prevBrandFilters.filter((i) => i !== item);
      } else {
        return [...prevBrandFilters, item.toLocaleLowerCase()];
      }
    });
  }
  function filterByBrand() {
    setFilteredProducts((prevFilteredProducts) => prevFilteredProducts.filter(product => brandFilters.includes(product.brand.toLocaleLowerCase())));
  }

  function changePriceFilter(min, max) {
    setPriceFilter({ min: min, max: max });
  }
  function filterByPrice() {
    const min = priceFilter.min;
    const max = priceFilter.max;
    setFilteredProducts((prevFilteredProducts) => prevFilteredProducts.filter((product) => {
      let productPrice = product.discountedPrice ? product.discountedPrice : product.price;
      if (max) {
        return productPrice < max && productPrice > min;
      }
      else {
        return productPrice > min;
      }
    }))
  }

  function ChangeSellerFilter(item) {
    setSellerFilter((prevSellerFilters) => {
      if (prevSellerFilters.includes(item)) {
        return prevSellerFilters.filter((i) => i !== item);
      } else {
        return [...prevSellerFilters, item.toLocaleLowerCase()];
      }
    });
  }
  function filterBySeller() {
    setFilteredProducts((prevFilteredProducts) => prevFilteredProducts.filter(product => sellerFilter.includes(product.seller.toLocaleLowerCase())));
  }


  function changeColorFilter(filter) {
    setColorFilter(filter.toLocaleLowerCase());
  }
  function filterByColor() {
    setFilteredProducts(prevFilteredProducts =>
      prevFilteredProducts.filter(product =>
        product.availableColors.some(color =>
          colorFilter.toLocaleLowerCase() === color.toLocaleLowerCase()
        )
      )
    );
  }

  function ChangeReleaseDateFilter(date) {
    setReleaseDateFilter(date);
  }
  function filterByDate() {
    const now = new Date();
    const xDaysAgo = new Date(now.getTime() - releaseDateFilter * 24 * 60 * 60 * 1000);

    setFilteredProducts((prevFilteredProducts) => prevFilteredProducts.filter(product => {
      const releaseDate = new Date(product.releaseDate);
      return releaseDate >= xDaysAgo && releaseDate <= now;
    }))
  }


  function changeAvailabilityFilter(condition) {
    setAvailabilityFilter(prevState => prevState ? null : condition);
  }
  function filterByAvailability() {
    setFilteredProducts(prevFilteredProducts => prevFilteredProducts.filter(item => item.availability === availabilityFilter));
  }

  function changeSizeFilter(size) {
    setSizeFilter(size.toLocaleLowerCase());
  }
  function filterBySize() {
    setFilteredProducts(prevFilteredProducts => prevFilteredProducts.filter(product => product.size.toLocaleLowerCase() === sizeFilter))
  }

  function clearAllFilters() {
    setCategoryFilter(null);
    setRatingFilter(null);
    setBrandFilters([]);
    setPriceFilter({ min: null, max: null });
    setCustomPriceFilter({ min: null, max: null });
    setAvailabilityFilter(null);
    setSellerFilter([]);
    setColorFilter(null);
    setReleaseDateFilter(null);
    setSizeFilter(null);
  }

  function handleNewBadge() {

    filteredProducts.map(product => {
      const now = new Date();
      const releaseDate = new Date(product.releaseDate);
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      if (!product.badge && releaseDate <= now && releaseDate >= thirtyDaysAgo) {
        product.badge = "New";
      }
    })

  }



  return (
    <section className="main-clothes mt-3">
      <div className="row w-100">
        <div className="col-lg-2 sideMenu d-none d-lg-block ps-4">
          {/* <div className="title-sidenav mt-2 ps-3 category__nav">
            <h5>پوشاک</h5>
            <ul className="clothes-type">
              <li>
                <a href="#" data-target="men" onClick={() => changeCategoryFilter("men")}>
                  مردانه
                </a>
              </li>
              <li>
                <a href="#" data-target="women" onClick={() => changeCategoryFilter("women")}>
                  زنانه
                </a>
              </li>
              <li>
                <a href="#" data-target="boy" onClick={() => changeCategoryFilter("Boys")}>
                  پسرانه
                </a>
              </li>
              <li>
                <a href="#" data-target="girl" onClick={() => changeCategoryFilter("Girls")}>
                  دخترانه
                </a>
              </li>
              <li>
                <a href="#" data-target="child" onClick={() => changeCategoryFilter("children")}>
                  پوشاک کودک
                </a>
              </li>
              <li>
                <a href="#" data-target="new" onClick={() => ChangeReleaseDateFilter(30)}>
                  پوشاک جدید
                </a>
              </li>
              <li>
                <a href="#" data-target="work" onClick={() => changeCategoryFilter("work")}>
                  لباس کار
                </a>
              </li>
              <li>
                <a href="#" data-target="accessory" onClick={() => changeCategoryFilter("accessory")}>
                  اکسسوری ها
                </a>
              </li>
              <li>
                <a href="#" data-target="trip" onClick={() => changeCategoryFilter("trip")}>
                  چمدان و وسایل سفر
                </a>
              </li>
              <li>
                <a href="#" data-target="watch" onClick={() => changeCategoryFilter("watch")}>
                  ساعت و اسمارت واچ
                </a>
              </li>
              <li>
                <a href="#" data-target="sport" onClick={() => changeCategoryFilter("sport")}>
                  پوشاک ورزشی
                </a>
              </li>
            </ul>
          </div> */}
          <div className="title-sidenav mt-3">
            <h5>برند</h5>
            <form className="brand-filter-container">
              <div>
                <input
                  type="checkbox"
                  id="checkbox4"
                  name="checkbox4"
                  defaultValue="checkbox4"
                  onChange={() => ChangeBrandFilter("chanel")}
                />
                <label htmlFor="checkbox4">Chanel</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox5"
                  name="checkbox5"
                  defaultValue="checkbox5"
                  onChange={() => ChangeBrandFilter("prada")}
                />
                <label htmlFor="checkbox5">Prada</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox6"
                  name="checkbox6"
                  defaultValue="checkbox6"
                  onChange={() => ChangeBrandFilter("gucci")}
                />
                <label htmlFor="checkbox6">Gucci</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox7"
                  name="checkbox7"
                  defaultValue="checkbox7"
                  onChange={() => ChangeBrandFilter("burberry")}
                />
                <label htmlFor="checkbox7">Burberry</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox8"
                  name="checkbox8"
                  defaultValue="checkbox8"
                  onChange={() => ChangeBrandFilter("nike")}
                />
                <label htmlFor="checkbox8">Nike</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox9"
                  name="checkbox9"
                  defaultValue="checkbox9"
                  onChange={() => ChangeBrandFilter("adidas")}
                />
                <label htmlFor="checkbox9">Adidas</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox10"
                  name="checkbox10"
                  defaultValue="checkbox10"
                  onChange={() => ChangeBrandFilter("calvin klein")}
                />
                <label htmlFor="checkbox10">Calvin Klein</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox11"
                  name="checkbox11"
                  defaultValue="checkbox11"
                  onChange={() => ChangeBrandFilter("louis vuitton")}
                />
                <label htmlFor="checkbox11">Louis Vuitton</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="checkbox12"
                  name="checkbox12"
                  defaultValue="checkbox12"
                  onChange={() => ChangeBrandFilter("ralph lauren")}
                />
                <label htmlFor="checkbox12">Ralph Lauren</label>
              </div>
            </form>
          </div>
          <div className="title-sidenav star-sidenav mt-3">
            <h5>نظرات مشتریان</h5>
            <ul className="starfilter-container">
              <li onClick={() => changeRatingFilter(4)}>
                <a href="#" data-target="4_star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star pe-2" />
                  به بالا
                </a>
              </li>
              <li onClick={() => changeRatingFilter(3)}>
                <a href="#" data-target="3_star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star" />
                  <i className="bi bi-star pe-2" />
                  به بالا
                </a>
              </li>
              <li onClick={() => changeRatingFilter(2)}>
                <a href="#" data-target="2_star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star" />
                  <i className="bi bi-star" />
                  <i className="bi bi-star pe-2" />
                  به بالا
                </a>
              </li>
              <li onClick={() => changeRatingFilter(1)}>
                <a href="#" data-target="1_star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star" />
                  <i className="bi bi-star" />
                  <i className="bi bi-star" />
                  <i className="bi bi-star pe-2" />
                  به بالا
                </a>
              </li>
            </ul>
          </div>
          <div className="title-sidenav mt-3">
            <h5>قیمت ها</h5>
            <ul className="price-filter-container">
              <li onClick={() => changePriceFilter(0, 25)}>
                <a href="#">تا 25$</a>
              </li>
              <li onClick={() => changePriceFilter(25, 50)}>
                <a href="#">از 25$ تا 50$</a>
              </li>
              <li onClick={() => changePriceFilter(50, 100)}>
                <a href="#">از 50$ تا 100$</a>
              </li>
              <li onClick={() => changePriceFilter(100, 200)}>
                <a href="#">از 100$ تا 200$</a>
              </li>
              <li onClick={() => changePriceFilter(200, null)}>
                <a href="#">از 200$ به بالا</a>
              </li>
              <div>
                <li className="d-inline-block">
                  <input type="text" placeholder="حداقل" onChange={(num) => setCustomPriceFilter({ ...customPriceFilter, min: num.target.value })} />
                </li>
                <li className="d-inline-block">
                  <input type="text" placeholder="حداکثر" onChange={(input) => setCustomPriceFilter({ ...customPriceFilter, max: input.target.value })} />
                </li>
                <li className="d-inline-block">
                  <button onClick={() => setPriceFilter(customPriceFilter)}>تایید</button>
                </li>
              </div>
            </ul>
          </div>
          <div className="title-sidenav mt-3">
            <h5>کالا های جدید</h5>
            <ul>
              <li onClick={() => ChangeReleaseDateFilter(30)}>
                <a href="#">۳۰ روز گذشته</a>
              </li>
              <li onClick={() => ChangeReleaseDateFilter(90)}>
                <a href="#">۹۰ روز گذشته</a>
              </li>
            </ul>
          </div>
          <div className="title-sidenav mt-3">
            <h5>سایز</h5>
            <ul>
              <li className="d-inline-block" onClick={() => changeSizeFilter("freesize")}>
                <a href="#">
                  <button>فری سایز</button>
                </a>
              </li>
              <li className="d-inline-block" onClick={() => changeSizeFilter("0-3")}>
                <a href="#">
                  <button>۰ تا ۳ سال</button>
                </a>
              </li>
              <li className="d-inline-block" onClick={() => changeSizeFilter("3-6")}>
                <a href="#">
                  <button>۳ تا ۶ سال</button>
                </a>
              </li>
              <li className="d-inline-block" onClick={() => changeSizeFilter("6-9")}>
                <a href="#">
                  <button>۶ تا ۹ سال</button>
                </a>
              </li>
              <li className="d-inline-block" onClick={() => changeSizeFilter("9-15")}>
                <a href="#">
                  <button>۹ تا ۱۵ سال</button>
                </a>
              </li>
              <li className="d-inline-block" onClick={() => changeSizeFilter("15-20")}>
                <a href="#">
                  <button>۱۵ تا ۲۰ سال</button>
                </a>
              </li>
              <li onClick={() => changeSizeFilter("20-30")}>
                <a href="#">
                  <button>۲۰ تا ۳۰ سال</button>
                </a>
              </li>
            </ul>
            <div className="col-12 col-lg-9"></div>
          </div>
          <div className="title-sidenav colorPicker mt-3">
            <h5>رنگ بندی</h5>
            <input type="radio" name="color" id="red" defaultValue="red" onClick={() => changeColorFilter("red")} />
            <label htmlFor="red">
              <span className="red" />
            </label>
            <input type="radio" name="color" id="green" onClick={() => changeColorFilter("green")} />
            <label htmlFor="green">
              <span className="green" />
            </label>
            <input type="radio" name="color" id="yellow" onClick={() => changeColorFilter("yellow")} />
            <label htmlFor="yellow">
              <span className="yellow" />
            </label>
            <input type="radio" name="color" id="olive" onClick={() => changeColorFilter("olive")} />
            <label htmlFor="olive">
              <span className="olive" />
            </label>
            <input type="radio" name="color" id="orange" onClick={() => changeColorFilter("orange")} />
            <label htmlFor="orange">
              <span className="orange" />
            </label>
            <br />
            <input type="radio" name="color" id="teal" onClick={() => changeColorFilter("teal")} />
            <label htmlFor="teal">
              <span className="teal" />
            </label>
            <input type="radio" name="color" id="blue" onClick={() => changeColorFilter("blue")} />
            <label htmlFor="blue">
              <span className="blue" />
            </label>
            <input type="radio" name="color" id="violet" onClick={() => changeColorFilter("violet")} />
            <label htmlFor="violet">
              <span className="violet" />
            </label>
            <input type="radio" name="color" id="purple" onClick={() => changeColorFilter("purple")} />
            <label htmlFor="purple">
              <span className="purple" />
            </label>
            <input type="radio" name="color" id="pink" onClick={() => changeColorFilter("pink")} />
            <label htmlFor="pink">
              <span className="pink" />
            </label>
          </div>
          <div className="title-sidenav mt-3">
            <h5>فروشنده ها</h5>
            <form>
              <input
                type="checkbox"
                id="checkbox13"
                name="checkbox13"
                defaultValue="checkbox13"
                onChange={() => ChangeSellerFilter("nordstorm")}
              />
              <label htmlFor="checkbox13">Nordstrom</label>
              <br />
              <input
                type="checkbox"
                id="checkbox14"
                name="checkbox14"
                defaultValue="checkbox14"
                onChange={() => ChangeSellerFilter("bloomingdale")}
              />
              <label htmlFor="checkbox14">Bloomingdale</label>
              <br />
              <input
                type="checkbox"
                id="checkbox15"
                name="checkbox15"
                defaultValue="checkbox15"
                onChange={() => ChangeSellerFilter("zara")}
              />
              <label htmlFor="checkbox15">Zara</label>
              <br />
              <input
                type="checkbox"
                id="checkbox16"
                name="checkbox16"
                defaultValue="checkbox16"
                onChange={() => ChangeSellerFilter("h&m")}
              />
              <label htmlFor="checkbox16">H&amp;M</label>
              <br />
              <input
                type="checkbox"
                id="checkbox17"
                name="checkbox17"
                defaultValue="checkbox17"
                onChange={() => ChangeSellerFilter("asos")}
              />
              <label htmlFor="checkbox17">ASOS</label>
              <br />
              <input
                type="checkbox"
                id="checkbox18"
                name="checkbox18"
                defaultValue="checkbox18"
                onChange={() => ChangeSellerFilter("amazon")}
              />
              <label htmlFor="checkbox18">Amazon</label>
              <br />
              <input
                type="checkbox"
                id="checkbox19"
                name="checkbox19"
                defaultValue="checkbox19"
                onChange={() => ChangeSellerFilter("zappos")}
              />
              <label htmlFor="checkbox19">Zappos</label>
              <br />
              <input
                type="checkbox"
                id="checkbox20"
                name="checkbox20"
                defaultValue="checkbox20"
                onChange={() => ChangeSellerFilter("neiman marcus")}
              />
              <label htmlFor="checkbox20">Neiman Marcus</label>
              <br />
              <input
                type="checkbox"
                id="checkbox21"
                name="checkbox21"
                defaultValue="checkbox21"
                onChange={() => ChangeSellerFilter("saks fifth avenue")}
              />
              <label htmlFor="checkbox21">Saks Fifth Avenue</label>
            </form>
          </div>
          <div className="title-sidenav mt-3">
            <h5>موجودی</h5>
            <form>
              <input
                type="checkbox"
                id="checkbox22"
                name="checkbox22"
                defaultValue="checkbox22"
                onChange={() => changeAvailabilityFilter(true)}
              />
              <label htmlFor="checkbox22">موجود در انبار</label>
            </form>
          </div>
          <div className="title-sidenav mt-3">
            <h5>پاک کردن فیلتر ها</h5>
            <button type="button" className="sidebar-clear-btn" onClick={clearAllFilters}>
              پاک کردن
            </button>
          </div>
        </div>
        <div className="col-lg-10 clothes-cards col-12">
          <div className="mt-3 ps-2 ps-lg-0">
            <h3>
              نتایج
              <br />
              <span style={{ fontSize: 14 }}>
                قیمت و سایر جزئیات ممکن است بر اساس اندازه و رنگ محصول متفاوت باشد.
              </span>
            </h3>
          </div>

          <div className="product-tabs mt-4 mb-4">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${!categoryFilter ? 'active' : ''}`}
                  onClick={() => {
                    setCategoryFilter(null);
                    setFilteredProducts(allProducts);
                  }}
                >
                  همه محصولات
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'men' || categoryFilter === 'men' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('men')}
                >
                  مردانه
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'women' || categoryFilter === 'women' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('women')}
                >
                  زنانه
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'boys' || categoryFilter === 'boys' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('boys')}
                >
                  پسرانه
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'girls' || categoryFilter === 'girls' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('girls')}
                >
                  دخترانه
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'children' || categoryFilter === 'children' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('children')}
                >
                  پوشاک کودک
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'watch' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('watch')}
                >
                  ساعت ها
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'shoes' || categoryFilter === 'shoes' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('shoes')}
                >
                  کفش ها
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'work' || categoryFilter === 'work' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('work')}
                >
                  لباس کار
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'accessory' || categoryFilter === 'accessory' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('accessory')}
                >
                  اکسسوری ها
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'trip' || categoryFilter === 'trip' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('trip')}
                >
                  چمدان و وسایل سفر
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${categoryFilter === 'sport' || categoryFilter === 'sport' ? 'active' : ''}`}
                  onClick={() => changeCategoryFilter('sport')}
                >
                  پوشاک ورزشی
                </button>
              </li>
            </ul>
          </div>

          <div className="row d-flex justify-content-center">

            {
              filteredProducts && filteredProducts.length ?
                filteredProducts.map((product) => (
                  <div key={product.id} className="col-6 col-lg-3 d-flex justify-content-center">
                    <div className="product-card cableItem">
                      {

                        product.badge ?
                          <div className="badge">{product.badge}</div>
                          : null
                      }
                      <div className="product-tumb">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="product-details">
                        <span className="product-catagory">{product.category}</span>
                        <h4>
                          <a href="#">{product.name}</a>
                        </h4>
                        <div className="product-bottom-details">
                          {
                            product.discountedPrice ?
                              <div dir="ltr" className="product-price">
                                <small> {`$${product.price}`} </small>
                                {`$${product.discountedPrice}`}
                              </div>
                              :
                              <div dir="ltr" className="product-price">
                                {`$${product.price}`}
                              </div>

                          }
                          <div className="product-links">
                            <a href="">
                              <i className="fa fa-heart" />
                            </a>
                            <a href="">
                              <i className="fa fa-shopping-cart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))

                :

                <div className="col-6 col-lg-3 d-flex justify-content-center">
                  <p>نتیجه ی یافت نشد!</p>
                </div>
            }


          </div>
        </div>
      </div>
    </section>


  );
}
