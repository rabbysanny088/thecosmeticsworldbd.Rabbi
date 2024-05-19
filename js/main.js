const sideNav = document.getElementById("responsive_drop_down_Box");
const res_category = document.getElementById("res_category");

const menu_List = document.getElementById("menu_List");

const close_X = document.querySelector(".close_X");
const cart_fill_items = document.getElementById("cart_fill_items");
const add_cart_items_all = document.getElementById("add_cart_items_all");

// cart_fill.addEventListener("click", () => {
//   add_cart_items_all.style.display = "block";
//   body.style.backgroundColor = "rgba(0,0,0,.5)";
// });

// shop_close_x.addEventListener("click", () => {});

var isNavOpen = false;
var isNavCart = false;

function toggleNav() {
  if (!isNavOpen) {
    sideNav.style.width = "65%";
    menu_List.style.display = "none";
    close_X.style.display = "block";
  } else {
    sideNav.style.width = "0";
    close_X.style.display = "none";
    menu_List.style.display = "block";
  }

  isNavOpen = !isNavOpen;
}
res_category.addEventListener("click", toggleNav);

function toggleCart() {
  if (!isNavCart) {
    add_cart_items_all.style.display = "block";
  } else {
    add_cart_items_all.style.display = "none";
  }

  isNavCart = !isNavCart;
}

cart_fill_items.addEventListener("click", toggleCart);

const dropdowns = [
  {
    trigger: ".side_drop_down_open",
    target: "#product_types",
    hiddenClass: "hidden",
  },
  { trigger: ".side_food_open", target: "#food", hiddenClass: "food_hidden" },
  {
    trigger: ".side_drop_down_open_make_up",
    target: "#make_up",
    hiddenClass: "hidden_make_up",
  },
  {
    trigger: ".side_Brand_open",
    target: "#Brand",
    hiddenClass: "brand_hidden",
  },
  {
    trigger: ".side_drop_down_open_two",
    target: "#side_megamenu_list",
    hiddenClass: "hidden_two",
  },
  {
    trigger: ".side_drop_down_open_three",
    target: "#side_megamenu_list_skin",
    hiddenClass: "hidden_three",
  },
  {
    trigger: ".side_drop_down_open_four",
    target: "#side_megamenu_list_concern",
    hiddenClass: "hidden_four",
  },
  {
    trigger: ".side_drop_down_open_five",
    target: "#side_megamenu_list_Ingredients",
    hiddenClass: "hidden_five",
  },
  {
    trigger: ".side_eyes_makeup_open_one",
    target: "#side_eyes_makeup_one",
    hiddenClass: "eyes_hidden",
  },
  {
    trigger: ".lips_care_open",
    target: "#side_lips_care",
    hiddenClass: "lips_hidden",
  },
  {
    trigger: ".Nails_Care_open",
    target: "#side_Nails_Care",
    hiddenClass: "nails_hidden",
  },
];

dropdowns.forEach((dropdown) => {
  const trigger = document.querySelector(dropdown.trigger);
  const target = document.querySelector(dropdown.target);

  trigger.addEventListener("click", () => {
    if (target.classList.contains(dropdown.hiddenClass)) {
      target.classList.remove(dropdown.hiddenClass);
    } else {
      target.classList.add(dropdown.hiddenClass);
    }
  });
});

// swiper section

const swiper = new Swiper(".Myswiper_one", {
  loop: true,
  autoplay: {
    delay: 2500,
  },
});
const Myswiper_two = new Swiper(".Myswiper_two", {
  slidesPerView: 7,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1278: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});

const Myswiper_three = new Swiper(".Myswiper_three", {
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
