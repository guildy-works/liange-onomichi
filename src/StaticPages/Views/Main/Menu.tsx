import * as React from "react";
import { Box, Grid, List, ListItem, Typography, useTheme } from "@mui/material";
import clover1 from "../../images/clover.jpg";


export const MenuBoard = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={{ xs: 2, sm: 4, md: 8 }}>
            <Grid item xs={12}>
                <Typography variant="h2" >- MENU</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5" color={theme.palette.primary.dark}>フェイシャルメニュー</Typography>

                <Typography variant="body1">•	Wクレンジングコース 50分</Typography>
                <Typography variant="body1">•	クレンジング+保湿コース 60分</Typography>
                <Typography variant="body1">•	保湿ケアーコース 60分</Typography>
                <Typography variant="body1">•	美白ケアーコース 70分</Typography>
                <Typography variant="body1">•	保湿ケアコース60分</Typography>
                <Typography variant="body1">•	保湿 + 美白Wケアコース85分</Typography>
                <Typography variant="body1">•	スペシャルケアコース90分</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}  >
                <Typography variant="h5" color={theme.palette.primary.dark}>フェイシャルオプションメニュー</Typography>
                <Typography variant="body1">•	ショルダーマッサージ 15分</Typography>
                <Typography variant="body1">•	ハンドマッサージ 15分</Typography>
                <Typography variant="body1">•	フットマッサージ15分</Typography>
                <Typography variant="body1">•	イオン導入</Typography>
                <Typography variant="body1">•	Q10マッサージ</Typography>
                <Typography variant="body1">•	オゾンマッサージ</Typography>
                <Typography variant="body1">•	クリオネマッサージ</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5" color={theme.palette.primary.dark}>全身光脱毛</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5" color={theme.palette.primary.dark}>ボディメニュー</Typography>

                <Typography variant="body1">•	リンパマッサージ上半身 or 下半身 60分</Typography>
                <Typography variant="body1">•	リンパマッサージ全身 60分</Typography>
                <Typography variant="body1">•	リンパマッサージ全身 90分</Typography>
                <Typography variant="body1">•	デトックスマッサージ上半身 or 下半身 60分</Typography>
                <Typography variant="body1">•	デトックスマッサージ全身 60分</Typography>
                <Typography variant="body1">•	デトックスマッサージ全身 90分</Typography>

            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" color={theme.palette.primary.dark}>ボディオプションメニュー</Typography>

                <Typography variant="body1">•	空気圧マッサージ10分</Typography>
                <Typography variant="body1">•	超音波マッサージ10分</Typography>
                <Typography variant="body1">•	キャビテーションマッサージ10分</Typography>

            </Grid>

            <Grid item xs={12} sm={6} md={4} >
                <Typography variant="h5" color={theme.palette.primary.dark}>パッケージメニュー</Typography>

                <Typography variant="body1">•	フェイシャル得！得！パッケージ、集中パッケージ</Typography>
                <Typography variant="body1">
                    ボディ集中月4パッケージ<br/>
                    ボディ集中月3パッケージ<br/>
                    光フェイシャル3回パッケージ<br/>
                    光フェイシャル6回パッケージ<br/>
                    光スペシャルフェイシャル3回パッケージ<br/>
                    光スペシャルフェイシャル6回パッケージ<br/>
                </Typography>

            </Grid>

            <Grid item xs={12} >
                <Typography variant="body1">※	自宅用の化粧品を持参していただくと、500円引き致します。</Typography>
                <Typography variant="body1">※	価格はサロンにお問い合わせ下さい。</Typography>
            </Grid>

            <Grid item  >
                <img style={{ width: "120px" }} src={clover1} />
            </Grid>

        </Grid >
    );
};
