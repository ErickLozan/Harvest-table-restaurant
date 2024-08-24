import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import "../styles.css";
import React from "react";

function MenuCourse() {
  const { course } = useParams();

  const appetizers = [
    {
      price: "20.00",
      image:
        "https://images.pexels.com/photos/166031/pexels-photo-166031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "10.00",
      image:
        "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "15.00",
      image:
        "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "17.00",
      image:
        "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "23.00",
      image:
        "https://images.pexels.com/photos/3933162/pexels-photo-3933162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "20.00",
      image:
        "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "20.00",
      image:
        "https://images.pexels.com/photos/27365273/pexels-photo-27365273/free-photo-of-barra-bar-cena-beber.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "19.00",
      image:
        "https://images.pexels.com/photos/27582710/pexels-photo-27582710/free-photo-of-comida-pizza-cena-almuerzo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const mainCourses = [
    {
      price: "19.00",
      image:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "15.00",
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "26.00",
      image:
        "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "30.00",
      image:
        "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "20.00",
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      price: "15.00",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      price: "16.00",
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      price: "21.00",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const desserts = [
    {
      price: "14.00",
      image:
        "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "20.00",
      image:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "25.00",
      image:
        "https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "20.00",
      image:
        "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "20.00",
      image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      price: "23.00",
      image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      price: "20.00",
      image: "https://images.pexels.com/photos/302468/pexels-photo-302468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      price: "25.00",
      image: "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const drinks = [
    {
      price: "10.00",
      image:
        "https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "20.00",
      image:
        "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "23.00",
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "10.00",
      image:
        "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      price: "15.00",
      image: "https://images.pexels.com/photos/1441122/pexels-photo-1441122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      price: "10.00",
      image: "https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const data =
    course === "appetizers"
      ? appetizers
      : course === "main-courses"
      ? mainCourses
      : course === "desserts"
      ? desserts
      : course === "drinks"
      ? drinks
      : [];

  const router = useNavigate();

  React.useEffect(() => {
    if (
      course !== "appetizers" &&
      course !== "main-courses" &&
      course !== "desserts" &&
      course !== "drinks"
    ) {
      return router("/error");
    }
  }, []);

  return (
    <MainLayout>
      <div className="menu__container">
        <div className="container">
          <h1 className="menu__title">
            {course === "appetizers"
              ? "Appetizers"
              : course === "main-courses"
              ? "Main Courses"
              : course === "desserts"
              ? "Desserts"
              : course === "drinks"
              ? "Drinks"
              : ""}
          </h1>

          <section className="menu__section">
            <div className="menu__articles-container">
              {data.map((item, index) => (
                <article key={index} className="menu__article">
                  <img src={item.image} alt={`image_${index}`} />
                  <div>
                    <span>${item.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default MenuCourse;
