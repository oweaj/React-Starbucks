import "./Start.css";
import Started1 from "@/assets/images/started1.jpg";
import Started2 from "@/assets/images/started2.jpg";
import Started3 from "@/assets/images/started3.jpg";

const gettingStartedList = [
  {
    id: 1,
    img: Started1,
    title: "Create an account",
    content: `To get started, <a href="#">join now.</a> You can also <a href="#">join in the app</a> to get access to the full range of Starbucks Rewards benefits.`,
  },
  {
    id: 2,
    img: Started2,
    title: "Order and pay how you’d like",
    content: `Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all
    ways. <a href="#">Learn how</a>`,
  },
  {
    id: 3,
    img: Started3,
    title: "Earn Stars, get Rewards",
    content: `As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming
    with as little as 25 Stars!`,
  },
];

export function Start() {
  return (
    <section className="start inner">
      <div className="start-info">
        <h3 className="startTitle">Getting started is easy</h3>
        <p className="startSub">Earn Stars and get rewarded in a few easy steps.</p>
      </div>
      <ul className="startNumber">
        <li>
          <div className="startWay">
            {gettingStartedList.map(({ id, img, title, content }) => (
              <div className="item" key={id}>
                <img className="startWayImg" src={img} alt={id} />
                <h4 className="startWayTitle">{title}</h4>
                <p className="startWayContent" dangerouslySetInnerHTML={{ __html: content }}></p>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}
