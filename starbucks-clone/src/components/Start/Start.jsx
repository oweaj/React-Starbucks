import "./Start.css";
import Started1 from "@/assets/images/started1.jpg";
import Started2 from "@/assets/images/started2.jpg";
import Started3 from "@/assets/images/started3.jpg";

const gettingStartedList = [
  {
    id: 1,
    img: Started1,
    title: "Create an account",
    content: `To get started, join now. You can also join in the app to get access to
    the full range of Starbucks Rewards benefits.`,
  },
  {
    id: 2,
    img: Started2,
    title: "Order and pay how you’d like",
    content: `Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all
    ways. Learn how`,
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
      <div className="startTitleBox">
        <h3 className="startTitle">Getting started is easy</h3>
        <p className="startSub">Earn Stars and get rewarded in a few easy steps.</p>
      </div>
      <ol className="startNumber">
        <li>
          <article className="startWay">
            {gettingStartedList.map((item) => (
              <div className="starWay-textWrapper" key={item.id}>
                <img className="startWayImg" src={item.img} alt={item.id} />
                <h4 className="startWayTitle">{item.title}</h4>
                <div className="startWayBrief">{item.content}</div>
              </div>
            ))}
          </article>
        </li>
      </ol>
    </section>
  );
}
