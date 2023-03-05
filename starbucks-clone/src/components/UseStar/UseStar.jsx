import "./UseStar.css";
import coffee from "@/assets/images/025.png";

const tabList = [
  {
    id: 1,
    content: 25,
  },
  {
    id: 2,
    content: 50,
  },
  {
    id: 3,
    content: 150,
  },
  {
    id: 4,
    content: 200,
  },
  {
    id: 5,
    content: 400,
  },
];

export function UseStar() {
  return (
    <section className="useStar">
      <div className="topPannel">
        <h3 className="useStarTitle">Get your favorites for free</h3>
        <div className="tabList">
          {tabList.map((item) => (
            <button className="tab" key={item.id}>
              {item.content}⭐️
            </button>
          ))}
        </div>
      </div>
      <div className="bottomPannel">
        <img className="tabPannelImg" src={coffee} alt="25 star image" />
        <div className="tabPannelInfo">
          <h4 className="tabPannelTitle">Customize your drink</h4>
          <p className="tabPannelBreif">
            Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.
          </p>
        </div>
      </div>
    </section>
  );
}
