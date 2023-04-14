import "./Benefit.css";
import funFreebies from "@/assets/images/fun-freebies.jpg";
import orderPay from "@/assets/images/order-pay-ahead.jpg";
import freeFaster from "@/assets/images/get-to-free-faster.jpg";

const beneFitItem = [
  {
    id: 1,
    text: "재미있는 공짜",
    title: "Fun freebies",
    content: "Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.",
    img: funFreebies,
  },
  {
    id: 2,
    text: "주문 및 선결제",
    title: "Order & pay ahead",
    content: "Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.",
    img: orderPay,
  },
  {
    id: 3,
    text: "더 빠르게 무료로 이용하세요",
    title: "Get to free faster",
    content: "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.",
    img: freeFaster,
  },
];

export function Benefit() {
  return (
    <section className="benefit inner">
      <div className="benefit-info">
        <h3 className="benefitTitle">Endless Extras</h3>
        <p className="benefitSub">
          Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty
          Rewards and—yes, free coffee.
        </p>
      </div>
      <ul className="benefitList">
        <li>
          <div className="benefitWay">
            {beneFitItem.map(({ id, text, title, content, img }) => (
              <div className="item" key={id}>
                <img className="benefitWayImg" src={img} alt={text} />
                <h4 className="benefitWayTitle">{title}</h4>
                <p className="benefitWayContent">{content}</p>
                <a href="#">Learn more</a>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}
