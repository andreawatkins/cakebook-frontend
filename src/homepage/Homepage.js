import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { AlignCenter, App, Images } from "react-bootstrap-icons";
import "../App.css";

const Homepage = () => {
  const userInformation = useSelector((store) => store.userInformation);
  const userName = userInformation.username;
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  console.log(userName);

  useEffect(() => {
    fetch(`http://localhost:8080/api/recipes/all`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(recipes);

  const createRecipeList = () => {
    return recipes.map((recipe) => {
      return (
        <h5 onClick={() => setRecipe(recipe)} key={recipe.id} className="title">
          {recipe.name}
        </h5>
      );
    });
  };

  console.log(userInformation);
  console.log(userInformation.isLoggedIn);
  const displayUserName = () => {
    if (userInformation.isLoggedIn) {
      return <h1 className="text-center"> {userName}'s Cakebook</h1>;
    }
    return <h1 className="text-center"> Cakebook</h1>;
  };

  const displayRecipeRecs = () => {
    if (userInformation.isLoggedIn) {
      return (
        <div className="card text-light border-warning bg-primary mb-3">
          <h3 className="text-center" font-size="100px">
            {" "}
            Recipes Recommended for {userName} !
          </h3>
          <h5 className="text-center"> {recipes && createRecipeList()}</h5>
        </div>
      );
    }
    return (
      <div className="card text-dark border-warning bg-light mb-3">
        <h3 className="text-center" font-size="100px">
          {" "}
          Who are you?
        </h3>
        <a style={{ color: "light" }} href={`/sign-up`} className="text-center">
          Log in to get recipe recommendations, create cookbooks, mealplans and
          more!
        </a>
      </div>
    );
  };

  return (
    <div>
      <div style={{ padding: "25px", topMargin: "25px" }}>
        {displayUserName()}
        <p className="text-center" fontSize="100px">
          {" "}
          Search for Recipes, Add Recipes to Cookbooks, Plan Meals for the Week
        </p>

        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-2">
              <div
                style={{
                  padding: "25 px",
                  display: "block",
                  float: "right",
                  rightMargin: "5px",
                }}
              >
                <img
                  rightMargin="10px"
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2022/06/Detroit-Style-Tomato-Herb-Pepperoni-Pizza-1-680x1020.jpg"
                  height="300px"
                  class="rounded float-right"
                />
              </div>
            </div>
            <div class="col-6">{displayRecipeRecs()}</div>
            <div class="col-2">
              <div className="images_left">
                <img
                  src="https://www.halfbakedharvest.com/wp-content/uploads/2022/05/Chili-Crisp-Chicken-Mango-Cucumber-Rice-Bowl-1.jpg"
                  height="300px"
                  class="rounded float-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="centerContainer"></div>
      <div style={{ padding: "25px" }}>
        <div style={{ display: "block", float: "right", rightMargin: "5px" }}>
          <img
            rightMargin="10px"
            src="https://www.halfbakedharvest.com/wp-content/uploads/2022/05/Strawberry-Mojito-1-680x1020.jpg"
            height="300px"
            class="rounded float-right"
          />
        </div>
        <div className="images_left">
          <img
            src="https://www.halfbakedharvest.com/wp-content/uploads/2021/05/Pesto-Chicken-Corn-and-Avocado-Bacon-Pasta-Salad-7-1-680x1020.jpg"
            height="300px"
            class="rounded float-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
