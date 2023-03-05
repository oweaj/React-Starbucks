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
      <h3 className="benefitTitle">Endless Extras</h3>
      <p className="benefitSub">
        Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty
        Rewards and—yes, free coffee.
      </p>
      <ul className="benefitList">
        <li>
          {beneFitItem.map((item) => (
            <article className="benefitItem" key={item.id}>
              <h4 className="benefitItemTitle">{item.title}</h4>
              <p className="benefitItemBrief">{item.content}</p>
              <a href="" className="learnMore">
                Learn more
              </a>
              <img src={item.img} alt={item.text} className="benefitImg" />
            </article>
          ))}
        </li>
      </ul>
    </section>
  );
}
