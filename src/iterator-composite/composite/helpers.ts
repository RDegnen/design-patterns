import MenuComponent from "./menus/menu-component"
import MenuItem from "./menus/menu-item"

export function addPancakeHouseMenu(menu: MenuComponent) {
  menu.add(new MenuItem(
    "K&B's Pancake Breakfast",
    "Pancakes with scrambled eggs, and toast",
    true,
    2.99
  ))
  menu.add(new MenuItem(
    "Regular Pancake Breakfast",
    "Pancakes with fried eggs, sausage",
    false,
    2.99
  ))
  menu.add(new MenuItem(
    "Blueberry Pancakes",
    "Pancakes made with fresh blueberries, and blueberry syrup",
    true,
    3.49
  ))
  menu.add(new MenuItem(
    "Waffles",
    "Waffles, with your choice of blueberries or strawberries",
    true,
    3.59
  ))
}

export function addDinerMenuFood(menu: MenuComponent) {
  menu.add(new MenuItem(
    "Vegetarian BLT",
    "(Fakin') Bacon with lettuce & tomato on whole wheat", 
    true, 
    2.99
  ))
  menu.add(new MenuItem(
    "BLT",
    "Bacon with lettuce & tomato on whole wheat", 
    false, 
    2.99
  ))
  menu.add(new MenuItem(
    "Soup of the day",
    "Soup of the day, with a side of potato salad", 
    false, 
    3.29
  ))
  menu.add(new MenuItem(
    "Hotdog",
    "A hot dog, with saurkraut, relish, onions, topped with cheese",
    false, 
    3.05
  ))
  menu.add(new MenuItem(
    "Steamed Veggies and Brown Rice",
    "Steamed vegetables over brown rice", 
    true, 
    3.99
  ))
  menu.add(new MenuItem(
    "Pasta",
    "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
    true, 
    3.89
  ))
}

export function addDessertMenu(menu: MenuComponent) {
  menu.add(new MenuItem(
    'Applie Pie',
    'Apple Pie with a flakey crust, topped with vanilla icecream',
    true,
    1.59
  ))
}