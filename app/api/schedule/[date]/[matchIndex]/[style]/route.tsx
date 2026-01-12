import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import React from "react";
import { getMatchesByDate } from "../../..";
import { Match, Player, Team } from "@/types/index.type";
import { getBaseTeams } from "@/helpers/sanity.helper";

export const dynamic = "force-dynamic";

const thumbnailRender = (
  match: Match,
  teamAndPlayers: { team: Team; players: Player[] }[]
) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background:
        "linear-gradient(to bottom, rgb(30, 34, 59), rgb(16, 18, 33))",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch",
      fontFamily: "Noto Sans",
      fontWeight: 400,
      color: "#FFFFFF",
      fontSize: "16px",
      lineHeight: "1em",
      padding: "2em 4em 0 4em",
    }}
  >
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="https://hkleague2026.hkmahjong.org/images/logo.png"
          width={128}
          height={128}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Noto Serif",
              fontSize: "4em",
              marginLeft: "0.125em",
            }}
          >
            HK-League 2026
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "1.5em",
              marginLeft: ".3em",
              textShadow: "#00000080 0 0 1em, #00000080 0 0 0.5em",
            }}
          >
            香港麻雀協會
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "1.5em",
              marginLeft: ".3em",
              textShadow: "#00000080 0 0 1em, #00000080 0 0 0.5em",
            }}
          >
            香港立直麻雀團體聯賽2026
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            主辦機構
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src="https://hkleague2026.hkmahjong.org/images/logo-hkma.png"
              width={212}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            場地提供
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src="https://hkleague2026.hkmahjong.org/images/logo-mahjestic.png"
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        fontSize: "3em",
        fontWeight: 600,
      }}
    >
      <div
        style={{ display: "flex", marginTop: "0.85em", marginBottom: "0.35em" }}
      >
        {match.name.substring(0, match.name.lastIndexOf("-"))} 出戰隊伍
      </div>
    </div>

    <div
      style={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        fontSize: "2em",
        fontWeight: 600,
        textAlign: "center",
      }}
    >
      {teamAndPlayers.map(({ team, players }) => (
        <div
          key={team._id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              background: `linear-gradient(to bottom, transparent, ${team.color})`,
              justifyContent: "flex-start",
              opacity: 0.5,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              overflow: "hidden",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <img
              style={{
                width: "150%",
                opacity: 0.25,
                position: "absolute",
                right: "-50px",
              }}
              src={`${team.squareLogoImage + "?w=800&h=800&fm=png"}`}
              alt=""
            />
          </div>
          {players[0] && (
            <div
              style={{
                display: "flex",
                position: "absolute",
                right: "0px",
                bottom: "40px",
                width: "288px",
                overflow: "hidden",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src={`${players[0].portraitImage + "?fm=png"}`}
                alt=""
              />
            </div>
          )}
          <div
            style={{
              background: `${team.color}B0`,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "115px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: "10.8em",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            {team.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "0.75em",
              height: "1.25em",
              whiteSpace: "nowrap",
              alignSelf: "flex-start",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            {team.secondaryName || " "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontSize: "0.5em",
              marginTop: "1em",
              alignSelf: "flex-start",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            {players[0] && (
              <div key={players[0]._id} style={{ display: "flex" }}>
                {players[0].name}
                {players[0].nickname && ` (${players[0].nickname})`}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const squareRender = (
  match: Match,
  teamAndPlayers: { team: Team; players: Player[] }[]
) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background:
        "linear-gradient(to bottom, rgb(30, 34, 59), rgb(16, 18, 33))",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "stretch",
      fontFamily: "Noto Sans",
      fontWeight: 400,
      color: "#FFFFFF",
      fontSize: "16px",
      padding: "2em",
    }}
  >
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="https://hkleague2026.hkmahjong.org/images/logo.png"
          width={128}
          height={128}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Noto Serif",
              fontSize: "4em",
              lineHeight: ".8em",
              marginLeft: "0.125em",
            }}
          >
            HK-League 2026
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "1.5em",
              marginLeft: ".3em",
              textShadow: "#00000080 0 0 1em, #00000080 0 0 0.5em",
            }}
          >
            香港麻雀協會
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "1.5em",
              marginLeft: ".3em",
              textShadow: "#00000080 0 0 1em, #00000080 0 0 0.5em",
            }}
          >
            香港立直麻雀團體聯賽2026
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <div style={{ display: "flex" }}>主辦機構</div>
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src="https://hkleague2026.hkmahjong.org/images/logo-hkma.png"
              width={212}
              height={64}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <div style={{ display: "flex" }}>場地提供</div>
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src="https://hkleague2026.hkmahjong.org/images/logo-mahjestic.png"
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        fontSize: "3em",
        fontWeight: 600,
      }}
    >
      <div style={{ display: "flex", marginTop: "0.5em" }}>
        {match.name.substring(0, match.name.lastIndexOf("-"))} 出戰隊伍
      </div>
    </div>

    {(
      [
        [teamAndPlayers[0], teamAndPlayers[1]],
        [teamAndPlayers[2], teamAndPlayers[3]],
      ] as const
    ).map((group, groupI) => (
      <div
        key={groupI}
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          fontSize: "2em",
          lineHeight: "1em",
          fontWeight: 600,
          textAlign: "center",
          marginLeft: "4em",
          marginRight: "4em",
        }}
      >
        {group.map(({ team, players }) => (
          <div
            key={team._id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "relative",
              flex: 1,
              padding: "0.75em 0.5em 0 0.5em",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                background: `linear-gradient(to bottom, transparent, ${team.color})`,
                opacity: 0.5,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            ></div>

            <div
              style={{
                display: "flex",
                position: "relative",
                width: "280px",
                height: "200px",
              }}
            >
              <img
                style={{
                  width: "100%",
                  opacity: 0.35,
                  position: "absolute",
                  top: "10%",
                  left: "-40px",
                }}
                src={`${team.squareLogoImage + "?w=800&h=800&fm=png"}`}
                alt=""
              />
              {players[0] && (
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    right: "-50px",
                    bottom: "-160px",
                    width: "240px",
                    height: "320px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={`${players[0].portraitImage + "?fm=png"}`}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                marginTop: "2em",
              }}
            >
              {team.name}
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                fontSize: "0.75em",
                height: "1em",
                whiteSpace: "nowrap",
              }}
            >
              {team.secondaryName || " "}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignSelf: "flex-start",
                fontSize: "0.5em",
                height: "1.75em",
                marginTop: "0.75em",
              }}
            >
              {players[0] && (
                <div style={{ display: "flex" }}>
                  {players[0].name}
                  {players[0].nickname && ` (${players[0].nickname})`}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const GET = async (
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      date: string;
      matchIndex: string;
      style: string;
    }>;
  }
) => {
  try {
    const { date, matchIndex, style } = await params;
    if (style !== "square" && style !== "thumbnail") {
      throw new Error(
        'style must be "square" or "thumbnail", e.g. 2026-01-01/1/square'
      );
    }

    if (isNaN(parseInt(matchIndex))) {
      throw new Error("matchIndex must be a number, e.g. 2026-01-01/1/square");
    }

    const regularTeamIds = await getBaseTeams().then((rts) =>
      rts.map((rt) => rt._key)
    );

    const matches = await getMatchesByDate(date).then((localMatches) => {
      return [localMatches[parseInt(matchIndex) - 1]];
    });

    const sortedTeamIds = [
      matches[0].playerEastTeam!._id,
      matches[0].playerSouthTeam!._id,
      matches[0].playerWestTeam!._id,
      matches[0].playerNorthTeam!._id,
    ].sort((a, b) => regularTeamIds.indexOf(b) - regularTeamIds.indexOf(a));

    const teamAndPlayersGroupedByTeamId: Record<
      string,
      { team: Team; players: Player[] }
    > = {
      [matches[0].playerEastTeam!._id]: {
        team: matches[0].playerEastTeam!,
        players: [],
      },
      [matches[0].playerSouthTeam!._id]: {
        team: matches[0].playerSouthTeam!,
        players: [],
      },
      [matches[0].playerWestTeam!._id]: {
        team: matches[0].playerWestTeam!,
        players: [],
      },
      [matches[0].playerNorthTeam!._id]: {
        team: matches[0].playerNorthTeam!,
        players: [],
      },
    };

    for (let i = 0; i < matches.length; i++) {
      if (
        matches[i].playerEast &&
        teamAndPlayersGroupedByTeamId[
          matches[i].playerEastTeam!._id
        ].players.findIndex(
          (item) => item._id === matches[i].playerEast?._id
        ) === -1
      ) {
        teamAndPlayersGroupedByTeamId[
          matches[i].playerEastTeam!._id
        ].players.push(matches[i].playerEast!);
      }

      if (
        matches[i].playerSouth &&
        teamAndPlayersGroupedByTeamId[
          matches[i].playerSouthTeam!._id
        ].players.findIndex(
          (item) => item._id === matches[i].playerSouth?._id
        ) === -1
      ) {
        teamAndPlayersGroupedByTeamId[
          matches[i].playerSouthTeam!._id
        ].players.push(matches[i].playerSouth!);
      }

      if (
        matches[i].playerWest &&
        teamAndPlayersGroupedByTeamId[
          matches[i].playerWestTeam!._id
        ].players.findIndex(
          (item) => item._id === matches[i].playerWest?._id
        ) === -1
      ) {
        teamAndPlayersGroupedByTeamId[
          matches[i].playerWestTeam!._id
        ].players.push(matches[i].playerWest!);
      }

      if (
        matches[i].playerNorth &&
        teamAndPlayersGroupedByTeamId[
          matches[i].playerNorthTeam!._id
        ].players.findIndex(
          (item) => item._id === matches[i].playerNorth?._id
        ) === -1
      ) {
        teamAndPlayersGroupedByTeamId[
          matches[i].playerNorthTeam!._id
        ].players.push(matches[i].playerNorth!);
      }
    }

    const payload = [
      matches[0].playerEastTeam!._id,
      matches[0].playerSouthTeam!._id,
      matches[0].playerWestTeam!._id,
      matches[0].playerNorthTeam!._id,
    ]
      .sort((a, b) => regularTeamIds.indexOf(b) - regularTeamIds.indexOf(a))
      .map((teamId) => teamAndPlayersGroupedByTeamId[teamId]);

    const [
      NotoSansRegular,
      NotoSansSemiBold,
      NotoSerifSemiBold,
      KdamThmorProRegular,
    ] = await Promise.all([
      fetch(
        "https://hkleague2026.hkmahjong.org/fonts/NotoSansTC-Regular.ttf"
      ).then((res) => res.arrayBuffer()),
      fetch(
        `https://hkleague2026.hkmahjong.org/fonts/NotoSansTC-SemiBold.ttf`
      ).then((res) => res.arrayBuffer()),
      fetch(
        `https://hkleague2026.hkmahjong.org/fonts/NotoSerif-SemiBold.ttf`
      ).then((res) => res.arrayBuffer()),
      fetch(
        `https://hkleague2026.hkmahjong.org/fonts/KdamThmorPro-Regular.ttf`
      ).then((res) => res.arrayBuffer()),
    ]);

    const renderFn = style === "thumbnail" ? thumbnailRender : squareRender;
    const parameters =
      style === "thumbnail"
        ? {
            width: 1280,
            height: 720,
          }
        : {
            width: 1080,
            height: 1080,
          };

    return new ImageResponse(renderFn(matches[0], payload), {
      ...parameters,
      fonts: [
        {
          name: "Noto Sans",
          data: NotoSansRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Noto Sans",
          data: NotoSansSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Noto Serif",
          data: NotoSerifSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Kdam Thmor Pro",
          data: KdamThmorProRegular,
          weight: 400,
          style: "normal",
        },
      ],
      debug: false,
      status: 200,
    });
  } catch (e) {
    return Response.json({
      success: false,
      error: (e as Error).message,
    });
  }
};
