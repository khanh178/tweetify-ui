import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  SettingOutlined,
  StarOutlined,
  TagOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Avatar, Button, Card, List, Space } from "antd";
import React, { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import styled from "styled-components";
import moment from "moment";
import useSound from "use-sound";
import gotchaSound from "../sound/gotcha.mp3";
import SettingModal from "./SettingModal";

const data = [
  {
    data: {
      author_id: "1339883197929144320",
      created_at: "2022-11-26T14:42:08.000Z",
      edit_history_tweet_ids: ["1596514648483692544"],
      id: "1596514648483692544",
      text: "#Asians do it better https://t.co/yTrnTtDTKf",
    },
    includes: {
      users: [
        {
          created_at: "2020-12-18T10:40:36.000Z",
          description:
            "‘Believe in yourself like the White House believes that we aren’t in a recession.’ Woman. Daughter. Index fund investor",
          id: "1339883197929144320",
          location: "Singapore",
          name: "the Amazing Grace",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1588504343346413569/QNaQcA0V_normal.jpg",
          username: "CapitalistHappy",
          verified: false,
        },
        {
          created_at: "2013-09-21T09:47:10.000Z",
          description:
            "Founder and CIO of a $1 Trillion Hedge Fun. Account for entertainment purposes only. Explicit language",
          id: "1889587914",
          location: "Monaco",
          name: "Dr Shrub 🌳🔥👨‍⚕️🇺🇦",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1537529657351974915/vVQxKOIZ_normal.jpg",
          username: "agnostoxxx",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "630392389",
      created_at: "2022-11-26T14:42:08.000Z",
      edit_history_tweet_ids: ["1596514648462831618"],
      id: "1596514648462831618",
      text:
        "RT @minatokunch: 27歳彼氏持ちがエロすぎた。\n彼氏に調教された腰使い最高。 https://t.co/46PlzX0XXd",
    },
    includes: {
      users: [
        {
          created_at: "2012-07-08T17:42:02.000Z",
          description: "",
          id: "630392389",
          name: "w-maxco",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1108695366638014465/Y4gL7A0f_normal.jpg",
          username: "m_axc",
          verified: false,
        },
        {
          created_at: "2022-07-30T00:55:31.000Z",
          description:
            "北海道/178/72/25歳/イチャイチャが趣味🥰/札幌市で会社員をしております🧑‍💻秘密厳守/撮影なしでも全然大丈夫です🙆‍♂️お気軽にDM下さい！ オフパコ申請フォームはこちらから💁🏼‍♂️ https://t.co/dGfEUqBSIE",
          entities: {
            description: {
              urls: [
                {
                  start: 98,
                  end: 121,
                  url: "https://t.co/dGfEUqBSIE",
                  expanded_url: "https://form.run/@minatokunch",
                  display_url: "form.run/@minatokunch",
                },
              ],
            },
          },
          id: "1553182417711640578",
          location: "札幌市",
          name: "みなと",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1553183640103727104/h86DUFml_normal.jpg",
          username: "minatokunch",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "1245918022897774593",
      created_at: "2022-11-26T14:42:09.000Z",
      edit_history_tweet_ids: ["1596514652677996544"],
      id: "1596514652677996544",
      text:
        "RT @davidjustincase: ขายบัตรวันที่ 27 \n1,000 บาท พร้อมส่งโค้ด #veryfestival2022",
    },
    includes: {
      users: [
        {
          created_at: "2020-04-03T03:36:29.000Z",
          description: "🪜𔗫🌲𔖲🍊",
          id: "1245918022897774593",
          name: "onlyyou",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1577945330351415296/iOhmVJgS_normal.jpg",
          username: "MarkBamigot714",
          verified: false,
        },
        {
          created_at: "2016-12-13T09:17:19.000Z",
          description: "Alpha type",
          id: "808601684372955136",
          name: "Dont be Dick / Be a man",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1582774072500711424/5cNEc_fQ_normal.jpg",
          username: "davidjustincase",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "1516441899837825029",
      created_at: "2022-11-26T14:42:09.000Z",
      edit_history_tweet_ids: ["1596514652665843712"],
      id: "1596514652665843712",
      text: "@rhnshoyo @sush_thewaste2 Own",
    },
    includes: {
      users: [
        {
          created_at: "2022-04-19T15:41:53.000Z",
          description:
            "I just be consuming my media. | 📺: seasonal anime, ??? | 📚: vagabond",
          entities: {
            url: {
              urls: [
                {
                  start: 0,
                  end: 23,
                  url: "https://t.co/DTgMiwLeBy",
                  expanded_url: "https://anilist.co/user/TheCeeJayz/",
                  display_url: "anilist.co/user/TheCeeJay…",
                },
              ],
            },
          },
          id: "1516441899837825029",
          location: "19. | he/him.",
          name: "CJ💜",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1577209667935092736/VPbQ6_xT_normal.jpg",
          username: "The_CJ_Z",
          verified: false,
        },
        {
          created_at: "2022-07-02T17:36:05.000Z",
          description:
            "One Piece • Hunter x Hunter • Monster | @Voidxscs | @galaxymiru_ | @yatozaii | @trulyxsinful | @aizenika | priv: @shoprivv |",
          entities: {
            url: {
              urls: [
                {
                  start: 0,
                  end: 23,
                  url: "https://t.co/5dIUOuAHBI",
                  expanded_url: "http://linktr.ee/peakhive",
                  display_url: "linktr.ee/peakhive",
                },
              ],
            },
            description: {
              mentions: [
                {
                  start: 40,
                  end: 49,
                  username: "Voidxscs",
                },
                {
                  start: 52,
                  end: 64,
                  username: "galaxymiru_",
                },
                {
                  start: 67,
                  end: 76,
                  username: "yatozaii",
                },
                {
                  start: 79,
                  end: 92,
                  username: "trulyxsinful",
                },
                {
                  start: 95,
                  end: 104,
                  username: "aizenika",
                },
                {
                  start: 113,
                  end: 122,
                  username: "shoprivv",
                },
              ],
            },
          },
          id: "1543287223444918272",
          location: "20 | he/him",
          name: "Shoyo ☽︎",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1596252494375448577/FIX_VD6z_normal.jpg",
          username: "rhnshoyo",
          verified: false,
        },
        {
          created_at: "2022-08-16T17:30:12.000Z",
          description: "pv: @sush_thewaste3",
          entities: {
            description: {
              mentions: [
                {
                  start: 4,
                  end: 19,
                  username: "sush_thewaste3",
                },
              ],
            },
          },
          id: "1559593258086305792",
          location: "interact for fb",
          name: "sush",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1594654102318813184/DSi8fibv_normal.jpg",
          username: "sush_thewaste2",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "1264883421924466689",
      created_at: "2022-11-26T14:42:08.000Z",
      edit_history_tweet_ids: ["1596514648496508929"],
      id: "1596514648496508929",
      text:
        "RT @hawkeyesquared7: If you don't understand consent play that's fine, but when consenting adults want to engage in sexual encounters where…",
    },
    includes: {
      users: [
        {
          created_at: "2020-05-25T11:38:44.000Z",
          description:
            "Black Queer Living is a youtube channel created by @coderock843 to provide free life skills video centering queer and trans* people of color and my siblings!",
          entities: {
            url: {
              urls: [
                {
                  start: 0,
                  end: 23,
                  url: "https://t.co/6YvmdGOr82",
                  expanded_url:
                    "https://www.youtube.com/channel/UCx3ihWKRcPrTDdhk87M2yeg",
                  display_url: "youtube.com/channel/UCx3ih…",
                },
              ],
            },
            description: {
              mentions: [
                {
                  start: 51,
                  end: 63,
                  username: "coderock843",
                },
              ],
            },
          },
          id: "1264883421924466689",
          name: "Black Queer Living",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1265036468755578882/yM_FWxGa_normal.jpg",
          username: "QueerLiving",
          verified: false,
        },
        {
          created_at: "2021-02-26T04:05:47.000Z",
          description:
            "the better hawkeye. adult, she/her, cat lover, shipping is neither activism nor morality. happy incest shipper since 2003",
          entities: {
            url: {
              urls: [
                {
                  start: 0,
                  end: 23,
                  url: "https://t.co/srNwiJpDHH",
                  expanded_url: "https://curiouscat.me/hawkeyesquared7",
                  display_url: "curiouscat.me/hawkeyesquared7",
                },
              ],
            },
          },
          id: "1365150975866982402",
          name: "☃️🎄✨️Kate Bishop💗💜💙💣🦈",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1365151137289048073/FAvbAtO3_normal.png",
          username: "hawkeyesquared7",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "1418376472394452992",
      created_at: "2022-11-26T14:42:08.000Z",
      edit_history_tweet_ids: ["1596514648488116224"],
      id: "1596514648488116224",
      text: "لسه ما جاك تعليمات تلعب العبود https://t.co/gadAkYfjxi",
    },
    includes: {
      users: [
        {
          created_at: "2021-07-23T01:05:07.000Z",
          description: "رياضي",
          id: "1418376472394452992",
          name: "ابو محمد (اتاوي) 🙏🇸🇳🇧🇷🇵🇹",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1556402475430825987/UHqqoLkL_normal.jpg",
          username: "AdAM1990Ad",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "1590580613186473984",
      created_at: "2022-11-26T14:42:09.000Z",
      edit_history_tweet_ids: ["1596514652686798848"],
      id: "1596514652686798848",
      text:
        "RT @subhi_karma: The first case to be registered under Gujrat's Freedom of Religion Act, gets settled in the court.\n\nA bench at Gujrat High…",
    },
    includes: {
      users: [
        {
          created_at: "2022-11-10T05:42:51.000Z",
          description: "थोक  के भाव चुम्मन दिए  जाते हैं",
          id: "1590580613186473984",
          location: "चुम्मन पुर",
          name: "चुम्मन चाचा😘(Parody)",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1590903628268650496/TgyxeesM_normal.jpg",
          username: "caca_cum",
          verified: false,
        },
        {
          created_at: "2015-02-14T15:47:46.000Z",
          description:
            "Editor @RashtraJyoti,Content Contributor @SwarajyaMag. Proud member of welfare initiative @sewanyaya. Engineer turned Journalist. Against Women Exploitation.",
          entities: {
            url: {
              urls: [
                {
                  start: 0,
                  end: 23,
                  url: "https://t.co/FfUGVc5kX8",
                  expanded_url:
                    "https://swarajyamag.com/author/1616697/Subhi%20Vishwakarma",
                  display_url: "swarajyamag.com/author/1616697…",
                },
              ],
            },
            description: {
              mentions: [
                {
                  start: 7,
                  end: 20,
                  username: "RashtraJyoti",
                },
                {
                  start: 41,
                  end: 53,
                  username: "SwarajyaMag",
                },
                {
                  start: 90,
                  end: 100,
                  username: "sewanyaya",
                },
              ],
            },
          },
          id: "3037063876",
          location: "Madhya Pradesh, India",
          name: "Subhi Vishwakarma",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1568479070819844097/Tfz-REvw_normal.jpg",
          username: "subhi_karma",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "1507395902897782785",
      created_at: "2022-11-26T14:42:09.000Z",
      edit_history_tweet_ids: ["1596514652653260803"],
      id: "1596514652653260803",
      text: "@marsztny saya weak girl juga",
    },
    includes: {
      users: [
        {
          created_at: "2022-03-25T16:36:13.000Z",
          description: "love moon ,",
          entities: {
            url: {
              urls: [
                {
                  start: 0,
                  end: 23,
                  url: "https://t.co/CYfiIUKb94",
                  expanded_url:
                    "https://open.spotify.com/user/31wyxnfti3gevkqc3kdji7eki6ku?si=brtSHac-QciEq2OJrvYR7A",
                  display_url: "open.spotify.com/user/31wyxnfti…",
                },
              ],
            },
          },
          id: "1507395902897782785",
          name: "☽’",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1593429996626137088/D210G81f_normal.jpg",
          username: "moonch4e",
          verified: false,
        },
        {
          created_at: "2022-10-06T12:49:34.000Z",
          description: "for fun",
          id: "1578004484491730944",
          name: "🦈",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1584926622989156354/a1hdlKKt_normal.jpg",
          username: "marsztny",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "1596514606859575296",
      created_at: "2022-11-26T14:42:08.000Z",
      edit_history_tweet_ids: ["1596514648467062787"],
      id: "1596514648467062787",
      text:
        "რომ მ ვილიმაზეე b0 ™\n ك̷و̷د̶ ̸خ̷ص̸م̴\n-    -→ فؤغا☭فؤقا☭كلؤسےت☭-→ →˙\nالسيف غاليري\nفورديل☭→\nتويو تو يو☭→\n  →سےفے\n  →نمشے\n→ستايلي\n نون  مصر والخليج →\n 3474\n 8068 https://t.co/oVYhoY9LI1",
    },
    includes: {
      users: [
        {
          created_at: "2022-11-26T14:41:59.000Z",
          description: "لا تيأس :",
          id: "1596514606859575296",
          name: "Sandra Buchanan",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1596514613511786497/jij9JQMK_normal.png",
          username: "SandraB96767035",
          verified: false,
        },
      ],
    },
  },
  {
    data: {
      author_id: "1519775831387684864",
      created_at: "2022-11-26T14:42:09.000Z",
      edit_history_tweet_ids: ["1596514652657418240"],
      id: "1596514652657418240",
      text: "@misty_horizons I'll die",
    },
    includes: {
      users: [
        {
          created_at: "2022-04-28T20:29:38.000Z",
          description:
            "Gamer 🎮| Wants to be a cozy streamer but also love league of legends🌿| pokemon is my fav game | In love with farming games 🍂 | 25 years old",
          id: "1519775831387684864",
          location: "Costa Rica",
          name: "Pau🍂",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1564593862215143424/Uh3KTK9Z_normal.jpg",
          username: "powpow1597",
          verified: false,
        },
        {
          created_at: "2020-12-14T16:43:01.000Z",
          description:
            "22✨| She/Her | Gamer 🎮 | pfp: @Tani_AC | Sometimes AC related 🤷‍♀️",
          entities: {
            description: {
              mentions: [
                {
                  start: 30,
                  end: 38,
                  username: "Tani_AC",
                },
              ],
            },
          },
          id: "1338524467216195592",
          location: "uk 🇬🇧",
          name: "m 🌸",
          profile_image_url:
            "https://pbs.twimg.com/profile_images/1429072046777065475/v52MA8OB_normal.jpg",
          username: "misty_horizons",
          verified: false,
        },
      ],
    },
  },
];

function TweetNews() {
  const [tweetList, setTweetList] = useState([]);
  const [playSound] = useSound(gotchaSound);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const socketUrl = "ws://127.0.0.1:9000";

  const {
    sendMessage,
    // sendJsonMessage,
    // lastMessage,
    // lastJsonMessage,
    readyState,
  } = useWebSocket(socketUrl, {
    onOpen: (x) => {
      console.log("Open a connection");
      sendMessage("hand-shake");
    },
    onMessage: (message) => {
      if (message.data) {
        const data = JSON.parse(message.data);
        const newList = [data, ...tweetList];
        setTweetList(newList);
        playSound();
      }
    },
    onClose: () => console.log("closed the connection"),
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 4000,
    reconnectAttempts: 10,
  });

  useEffect(() => {
    // const instance = axios.create({
    //   baseURL: "http:l",
    //   timeout: 1000,
    //   headers: { "X-Custom-Header": "foobar" },
    // });
    axios({
      method: "get",
      url: "http://localhost:8000/tweets",
    }).then((res) => {
      if (res.status == 200) {
        const initialList = res.data.map((item) => JSON.parse(item.data));
        setTweetList(initialList.reverse());
      }
    });
  }, []);

  const onOpenSetting = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Card
        style={{ width: "100%" }}
        title={
          <Space direction="horizontal">
            <TwitterOutlined spin />
            <span>New Tweet</span>
          </Space>
        }
        extra={<SettingOutlined onClick={onOpenSetting} />}
        bodyStyle={{ padding: "0px 24px" }}
      >
        <List
          itemLayout="vertical"
          dataSource={tweetList}
          renderItem={(item) => {
            const { data, includes } = item;
            const { text, created_at, id } = data || {};
            const { users = [] } = includes || {};
            const { profile_image_url, name, location, username, verified } =
              users[0] || {};
            const isRetweet = users.length > 1;

            const renderTitle = () => {
              return (
                <Space direction="horizontal">
                  {verified && <CheckCircleOutlined />}
                  <a
                    href={`https://twitter.com/twitter/status/${id}`}
                    target="_blank"
                  >
                    {`${name} (@${username})`}
                  </a>
                </Space>
              );
            };

            const renderContent = () => {
              return (
                <div>
                  <p>
                    <span>{text}</span>
                  </p>
                </div>
              );
            };

            return (
              <ListItem
                key={id}
                actions={[
                  <Space>
                    {<ClockCircleOutlined />}
                    {moment(created_at).fromNow()}
                  </Space>,
                  <Space>
                    {<StarOutlined />}
                    {<span>{location || "Unknown"}</span>}
                  </Space>,
                ]}
              >
                <ListMeta
                  avatar={<Avatar src={profile_image_url} size="large" />}
                  title={renderTitle()}
                  description={renderContent()}
                  style={{ alignItems: "center" }}
                />
              </ListItem>
            );
          }}
        />
      </Card>
      <SettingModal isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
}

const ListItem = styled(List.Item)`
  padding: 12px 0px !important;
`;

const ListMeta = styled(List.Item.Meta)``;

export default TweetNews;
