import "./App.css";
import { Image, Button } from "./components";

function App() {
  return (
    <>
      <div className="page">
        <div
          style={{
            width: 768,
            height: "100vh",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: 768,
              height: 715,
              position: "relative",
            }}
          >
            <Image
              src="gridboard-empty.png"
              style={{
                width: 768,
                height: 715,
              }}
            />
            <Image
              src="gridboard-playing.svg"
              style={{
                position: "absolute",
                left: 270,
                top: 178,
              }}
            />
          </div>

          <div
            style={{
              width: 418,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button type="btn-danger" />
            <Button type="btn-warning" />
            <Button type="btn-primary" />
          </div>
        </div>
        <Image
          src="relati_logo.svg"
          style={{
            position: "absolute",
            top: 14,
            right: 21,
          }}
        />
        <Image
          src="ghost-happy.svg"
          style={{
            position: "absolute",
            top: 43,
            left: 50,
          }}
        />
      </div>

      <div className="page">
        <Image
          src="gridboard-empty.png"
          style={{
            width: 363,
            height: 338,
            position: "absolute",
            top: 298,
            left: "3.49%",
          }}
        />
        <p
          style={{
            fontFamily: "Noto Sans",
            textAlign: "right",
            position: "absolute",
            top: 225,
            right: 230,
          }}
        >
          一張紙、一枝筆，簡略的井字棋（Tic-Tac-Toe
          <br />
          略減彼此之間的距離。
          <br />
          我們的出發點並非開發華麗的動作冒險類遊戲，
          <br />
          而是一款沒有遊玩門檻，
          <br />
          不分男女老幼，
          <br />
          入手即上手的棋類遊戲。
        </p>
        <Image
          src="mushroom-illus.svg"
          style={{
            width: 1366,
            height: 780,
            transform: "rotate(-8.65deg)",
            position: "absolute",
            right: 0,
          }}
        />
        <p
          style={{
            fontFamily: "Noto Sans",
            textAlign: "left",
            color: "white",
            position: "absolute",
            top: 715,
            left: 67,
          }}
        >
          初始靈感來自家諭戶曉的圈圈叉叉，但是玩法多樣性嚴重不足，因此，
          <br />
          我們擴展棋盤尺寸，為了促進棋手間的攻城掠地；
          <br />
          我們新增連結系統，為了模擬戰場中的調兵遣將；
          <br />
          我們融入現代元素，為了妝點景物上的賞心悅目。
          <br />
        </p>
      </div>
      <div className="page">
        <Image
          src="OX.svg"
          style={{
            position: "absolute",
            top: "3%",
            right: "4%",
          }}
        />
        <div
          style={{
            width: 630,
            height: 745,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            position: "absolute",
            top: "10%",
            left: 0,
          }}
        >
          <Image src="previous_icon.svg" style={{}} />
          <div
            style={{
              width: 362,
              height: 745,
              position: "relative",
            }}
          >
            <Image src="iPhoneX.svg" style={{}} />
            <Image
              src="screen.svg"
              style={{
                position: "absolute",
                top: 88,
                left: 19,
              }}
            />
          </div>
          <Image src="next_icon.svg" style={{}} />
        </div>
      </div>
      <div className="page wrapper-yellow">
        <h1
          style={{
            color: "white",
            textAlign: "right",
            margin: "0 5% 0 0",
          }}
        >
          關卡與成就系統
        </h1>
        <pre
          style={{
            color: "white",
            textAlign: "right",
            margin: "0 4% 10% 0",
          }}
        >
          {`
          Lorem ipsum dolor , consec tetur adipiscing elit. condimentum 
          ultricies sollicitudin facilisis eget. Vestibulum rhoncus dui
          consectetur. Vivamus elementum ligula, vitae pharetra quam. 
          tempus diam, ultricies sollicitudin facilisis eget. Vestibulum
          laoreet consectetur. Vivamus elementum ligula, pharetra quam. 
          Nullam at ligula sed metuLorem ipsum dolor sit, consec tetur 
          elit. Nam condimentum, ultricies sollicitudin facilisis eget. 
          Vestibulum rhoncus dui vel laoreet consectetur. Vivamus eget
          `}
        </pre>
        <Image
          src="ghost-cried.svg"
          style={{
            position: "absolute",
            bottom: 330,
            left: "3%",
          }}
        />
        <pre
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          {`未來主要著重在棋子的多元角色發展，
像是RPG版本的棋子具有騎士、精靈、刺客等等的型態，
每種角色都有其獨到的能力，再搭配棋手們精妙的思路，
各式玩法和套路將層出不窮。

我們目前正在開發競技模式，給予精熟玩家大展身手的空間，變相提高遊戲的黏著度。`}
        </pre>
        <Image
          src="roast_chicken.svg"
          style={{
            width: 250,
            height: 186,
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        />
      </div>
      <div className="wrapper wrapper-black">
        <div
          style={{
            width: 576,
            color: "white",
            textAlign: "left",
            position: "absolute",
            top: "15%",
            left: "10%",
          }}
        >
          <h1>都市幽靈·幽幽</h1>
          <p>
            一個從都市裡出生的幽靈種族，人類在無窮無盡的開發後，都市也開始誕生了屬於科技的生命靈體-幽幽，而他們就像他們的出生的原因一樣，十分熱愛智能科學，於是只要還有能開發的地方就不會停止研究科技新知。
          </p>
        </div>
        <Image
          src="ghost.svg"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "15%",
          }}
        />
        <Image
          src="ghost-group.svg"
          style={{
            position: "absolute",
            bottom: "2%",
            left: "2%",
          }}
        />
      </div>
      <div className="wrapper wrapper-yellow">
        <div
          style={{
            width: 576,
            color: "black",
            textAlign: "left",
            position: "absolute",
            top: "15%",
            right: "7.5%",
          }}
        >
          <h1>菇菇精靈·香菇雞</h1>
          <p>
            既是香菇又是雞，因為美味又方便，所以總會成為人們抓捕的對象，目前已瀕臨滅絕，為了避免慘遭滅族的命運，於是香菇雞們決定挺身而出，捍衛他們的生存權！
          </p>
        </div>
        <Image
          src="mushroom.svg"
          style={{
            position: "absolute",
            bottom: "15%",
            left: "7.5%",
          }}
        />
        <Image
          src="mushroom-group.svg"
          style={{
            position: "absolute",
            bottom: "2%",
            right: "2%",
          }}
        />
      </div>
    </>
  );
}

export default App;
