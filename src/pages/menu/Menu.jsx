import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import "./styles.css";

function Menu() {
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
  ];

  return (
    <MainLayout>
      <div className="menu__container">
        <div className="container">
          <h1 className="menu__title">Our menu</h1>

          <section className="menu__section">
            <h2 className="menu__subtitle">Appetizers</h2>

            <div className="menu__articles-container">
              {appetizers.map((item, index) => (
                <article key={index} className="menu__article">
                  <img src={item.image} alt={`image_${index}`} />
                  <div>
                    <span>${item.price}</span>
                  </div>
                </article>
              ))}
            </div>

            <Link className="menu__cta" to="/menu/appetizers">
              See all
            </Link>
          </section>

          <section className="menu__section">
            <h2 className="menu__subtitle">Main Courses</h2>

            <div className="menu__articles-container">
              {mainCourses.map((item, index) => (
                <article key={index} className="menu__article">
                  <img src={item.image} alt={`image_${index}`} />
                  <div>
                    <span>${item.price}</span>
                  </div>
                </article>
              ))}
            </div>

            <Link className="menu__cta" to="/menu/main-courses">
              See all
            </Link>
          </section>

          <section className="menu__section">
            <h2 className="menu__subtitle">Desserts</h2>

            <div className="menu__articles-container">
              {desserts.map((item, index) => (
                <article key={index} className="menu__article">
                  <img src={item.image} alt={`image_${index}`} />
                  <div>
                    <span>${item.price}</span>
                  </div>
                </article>
              ))}
            </div>

            <Link className="menu__cta" to="/menu/desserts">
              See all
            </Link>
          </section>

          <section className="menu__section">
            <h2 className="menu__subtitle">Drinks</h2>

            <div className="menu__articles-container">
              {drinks.map((item, index) => (
                <article key={index} className="menu__article">
                  <img src={item.image} alt={`image_${index}`} />
                  <div>
                    <span>${item.price}</span>
                  </div>
                </article>
              ))}
            </div>

            <Link className="menu__cta" to="/menu/drinks">
              See all
            </Link>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default Menu;
