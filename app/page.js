import styles from "@/app/page.module.scss";
import { Iframe } from "@/components/Iframe";
import FaqAccordion from "@/components/FaqAccordion";
import PlayButton from "@/components/PlayButton";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

import { promises as fs } from "fs";

//---------------------------------------------------------------------------------
export async function generateMetadata() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const metaData = JSON.parse(file);

  const thisGamesData = metaData.data.attributes.pageGame[0];
  const NewMetaData = [thisGamesData];

  const title = NewMetaData.map((thisGame) => thisGame["game-name"]);
  const description = NewMetaData.map(
    (thisGame) => thisGame["relevant-content"]
  );

  return {
    title: title[0],
    description: description,
    openGraf: {
      images: [],
    },
  };
}
//---------------------------------------------------------------------------------

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const gameData = JSON.parse(file);

  const thisGamesData = gameData.data.attributes.pageGame[0];
  const NewThisGamesData = [thisGamesData];

  const gameName = NewThisGamesData[0]["game-name"];

  return (
    <>
      <header>
        <nav>
          <div>
            <TopBar gameName={gameName} />
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <div className="Pages">
          {NewThisGamesData.map((thisGame) => (
            <div key={thisGame.id}>
              <div className="RowRating">{thisGame.rating} ⭐</div>
              <Iframe data={NewThisGamesData} />
              <PlayButton data={NewThisGamesData} />
              {[...new Set(thisGame["relevant-content"])].map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
              <br />
              <br />
              <h2>{thisGame["ratings-title"]}</h2>
              <div id="BoxRatings">
                {thisGame.ratings.map((item, index) => (
                  <div key={index} className="BoxesRate">
                    <div className="IconBox">
                      <img src={`/icons/${item.icon}`} alt={item.title} />
                    </div>
                    <div className="InfoBox">
                      <p className="TitleRate">{item.title}</p>
                      <p className="SubTitleRate">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h2>Frequently Asked Questions</h2>
              <FaqAccordion faqs={thisGame.faq} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
