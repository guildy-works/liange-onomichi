import * as React from "react";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img18.jpg";
import img3 from "../../images/img3.jpg";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { SkewScrollTriggerAnimation } from "Components/SkewScrollTriggerAnimation";
import { TransitionImage } from "Components/TransitionImage";

export const Profile = () => {
    return (
        <Grid container spacing={{ xs: 2, sm: 4, md: 8 }}>
            <Grid item xs={12}>
                <Typography variant="h2" >- PROFILE</Typography>
            </Grid>

            <Grid item container xs={12} md={4} spacing={2} >
                <Grid item xs={12} sm={4} md={12} >
                    <TransitionImage className=""
                        parallaxSlideLength={20}
                        src={img3}
                        alt="test"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={12} >
                    <TransitionImage className=""
                        parallaxSlideLength={20}
                        src={img1}
                        alt="test"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} md={8} >
                <Stack justifyContent="center" height="100%" maxWidth="620px" m="auto">
                    <SkewScrollTriggerAnimation delay={0} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="h5" >店長プロフィール</Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={100} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" mt={1}>
                            1997年TBCに入社。<br />
                            フェイシャル、ボディ、脱毛等の施術を行い、<br />
                            EA上級認定エステティシャン<br />
                            美容脱毛エステティシャンの資格を取得<br />
                            2014年退社後2015年liange〜リアンジュオープン致しました。<br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={200} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" >
                            2014年に退社後、
                            2015年に「liange〜リアンジュ」をオープン致しました。<br /><br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={300} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1" >
                            お客様1人1人に合った施術を行い安心価格で高品質なエステメニューを提供します。<br />
                            皆様の日々の悩み、コンプレックスを教えてください…
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={400} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1">
                            お客様の気持ちに寄り添い気軽にコースを受けて頂ける空間を<br />
                            日々考え提供していく事をお約束いたします。<br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={600} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="body1">
                            是非一度liangeで美と癒しのひと時をお過ごしください。<br />
                            お待ちしております。
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={700} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="subtitle2" sx={{ mt: { xs: 2, sm: 3, } }}>
                            1967年9月19日生まれ<br />
                            O型<br />
                            乙女座<br />
                        </Typography>
                    </SkewScrollTriggerAnimation>

                    <SkewScrollTriggerAnimation delay={800} style={{ margin: "0", zIndex: -1 }}>
                        <Typography variant="subtitle2" >
                            福山市立大門高等学校卒業後色々なお仕事を経験し…<br />
                            1997年TBC入社<br />
                            2015年 Liengeオープン
                        </Typography>
                    </SkewScrollTriggerAnimation>
                </Stack>
            </Grid>

        </Grid >
    );
};
