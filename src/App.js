import React from "react";
import './scss/app.scss';

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div class="wrapper">
      <Header />

      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />

          <Sort/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title = 'Смешная' price = "450"/>
            <PizzaBlock title = 'Сырная' price = "1000"/>
            <PizzaBlock title = 'МексиканГёрл' price = "250"/>
            <PizzaBlock title = 'Ауешная' price = "20"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
