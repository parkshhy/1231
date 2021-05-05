import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, Button, CardText, Dialog } from 'react-mdl';
import Port from './CSS/Portfolio.jpeg';
import Todo from './CSS/todo.jpeg';
import Semi from './CSS/semi.jpeg';
import FINAL from './CSS/FINAL.jpeg';
import SARAM from './CSS/5555.jpeg';
import Project1 from './CSS/project1/1.jpeg'
import Project2 from './CSS/project1/2.jpeg'
import Project3 from './CSS/project1/3.jpeg'
import Project4 from './CSS/project1/4.jpeg'
import Project5 from './CSS/project1/5.jpeg'
import Project6 from './CSS/project1/6.jpeg'
import Project7 from './CSS/project1/7.jpeg'
import Project8 from './CSS/project1/8.jpeg'
import Project11 from './CSS/project2/11.jpeg'
import Project12 from './CSS/project2/12.jpeg'
import Project13 from './CSS/project2/13.jpeg'
import Project14 from './CSS/project2/14.jpeg'
import SPRING from './CSS/img.jpeg'
import SPRING1 from './CSS/springbook.jpeg'
import JAVABOOK from './CSS/javabook.jpeg'
import ReactBook from './CSS/react.jpeg'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleOpenDialog1 = this.handleOpenDialog1.bind(this);
        this.handleCloseDialog1 = this.handleCloseDialog1.bind(this);
        this.handleOpenDialog2 = this.handleOpenDialog2.bind(this);
        this.handleCloseDialog2 = this.handleCloseDialog2.bind(this);
        this.handleOpenDialog3 = this.handleOpenDialog3.bind(this);
        this.handleCloseDialog3 = this.handleCloseDialog3.bind(this);
        this.handleOpenDialog4 = this.handleOpenDialog4.bind(this);
        this.handleCloseDialog4 = this.handleCloseDialog4.bind(this);
        this.handleOpenDialog5 = this.handleOpenDialog5.bind(this);
        this.handleCloseDialog5 = this.handleCloseDialog5.bind(this);
        this.handleOpenDialog6 = this.handleOpenDialog6.bind(this);
        this.handleCloseDialog6 = this.handleCloseDialog6.bind(this);
        this.handleOpenDialog7 = this.handleOpenDialog7.bind(this);
        this.handleCloseDialog7 = this.handleCloseDialog7.bind(this);
        this.handleOpenDialog8 = this.handleOpenDialog8.bind(this);
        this.handleCloseDialog8 = this.handleCloseDialog8.bind(this);
    }

    state = {
        isOpen: false
    };

    handleOpenDialog() {
        this.setState({
            openDialog: true,
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false,
        });
    }
    handleOpenDialog1() {
        this.setState({
            openDialog1: true
        });
    }

    handleCloseDialog1() {
        this.setState({
            openDialog1: false
        });
    }
    handleOpenDialog2() {
        this.setState({
            openDialog2: true
        });
    }

    handleCloseDialog2() {
        this.setState({
            openDialog2: false
        });
    }
    handleOpenDialog3() {
        this.setState({
            openDialog3: true
        });
    }

    handleCloseDialog3() {
        this.setState({
            openDialog3: false
        });
    }
    handleOpenDialog4() {
        this.setState({
            openDialog4: true
        });
    }

    handleCloseDialog4() {
        this.setState({
            openDialog4: false
        });
    }
    handleOpenDialog5() {
        this.setState({
            openDialog5: true
        });
    }

    handleCloseDialog5() {
        this.setState({
            openDialog5: false
        });
    }
    handleOpenDialog6() {
        this.setState({
            openDialog6: true
        });
    }

    handleCloseDialog6() {
        this.setState({
            openDialog6: false
        });
    }
    handleOpenDialog7() {
        this.setState({
            openDialog7: true
        });
    }

    handleCloseDialog7() {
        this.setState({
            openDialog7: false
        });
    }
    handleOpenDialog8() {
        this.setState({
            openDialog8: true
        });
    }

    handleCloseDialog8() {
        this.setState({
            openDialog8: false
        });
    }

    toggleCategories() {
        if (this.state.activeTab === 1) {
            return (
                <div>
                    <div className="projects-grid">

                        {/*Project1*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>

                            <img src={Semi} alt="kannrisystem" style={{ height: '178px' }} />

                            <CardText>
                                図書管理システム
                            </CardText>

                            <Button colored onClick={this.handleOpenDialog1} raised ripple target="1">詳細</Button>
                            <Dialog open={this.state.openDialog1} onClick={this.handleCloseDialog1} keyType="1" style={{
                                color: 'black', height: '80%', margin: 'auto', width: '60%'
                            }}>
                                <div>
                                    <Grid >
                                        <Cell className="modal" col={7} style={{textAlign:'left'}}>

                                            <h2>図書管理システム</h2>
                                            <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                            <img src={Project1} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    DB構造図
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                            <img src={Project2} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    全体CSS, ホームページ実行時のポップアップ実行,会員加入担当
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>


                                            <img src={Project3} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    1.MAIN HEADスライド広告<br />
                    2.当該イメージクリックで図書ページに移動
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                            <img src={Project4} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    会員加入時に有効性検査する(Ajax)
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>


                                            <img src={Project5} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    図書アップロード画面
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                            <img src={Project6} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    図書詳細ページ
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                            <img src={Project7} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    図書ページ
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                            <img src={Project8} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    買い物かご
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                        </Cell>

                                        <Cell className="modal" col={5} style={{textAlign:'left'}}>
                                            <h3>韓国 中央HTA</h3>
                                            <hr style={{ borderTop: '3px solid #395181' }}></hr>
                    プロジェクト 期間 : 2016.6~2016.7<br /><br />
                    プロジェクト 内容  : 図書管理システム<br /><br />
                    言語 : JAVA,JSP,ORCAL,HTML/CSS<br /><br />
                    DB : ORACLE
                    </Cell>
                                    </Grid></div>
                            </Dialog>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>



                        {/*--------------------------------------------------Project2-----------------------------------------------------------*/}

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={FINAL} alt="kannrisystem" style={{ height: '178px' }} />
                            <CardText>
                                スポーツサイト
                            </CardText>
                            <Button colored onClick={this.handleOpenDialog2} raised ripple target="1">詳細</Button>
                            <Dialog open={this.state.openDialog2} onClick={this.handleCloseDialog2} keyType="1" style={{
                                color: 'black', height: '80%', margin: 'auto', width: '60%'
                            }}>
                                <div>
                                    <Grid >
                                        <Cell style={{textAlign:'left'}} className="modal" col={7}>

                                            <h2>スポーツサイト</h2>
                                            <hr style={{ borderTop: '3px solid #395181' }}></hr>
                                            <img src={Project11} alt="project1" style={{ width: '100%' }} />
                                            <img src={Project12} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    DB構造図
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                            <img src={Project13} alt="project1" style={{ width: '100%' }} />
                                            <img src={Project14} alt="project1" style={{ width: '100%' }} />
                                            <br/><br/>
                    自由掲示板(CURD)
                    <hr style={{ borderTop: '3px solid #395181' }}></hr>

                                        </Cell>

                                        <Cell className="modal" col={5} style={{textAlign:'left'}}>
                                            <h3>韓国 中央HTA</h3>
                                            <hr style={{ borderTop: '3px solid #395181' }}></hr>

                            プロジェクト 期間 : 2016.9~2016.10<br /><br />
                            プロジェクト 内容 : スポーツサイト<br /><br />
                            言語 : JAVA,SPRING,MyBatis,HTML/CSS,<br /><br />
                            DB : MySql
                                        </Cell>
                                    </Grid></div>
                            </Dialog>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div></div>
            )








        } else if (this.state.activeTab === 3) {
            return (
                <div>
                    <div className="projects-grid">
                        {/*docomo*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.unlockjp.com/en/wp-content/uploads/2020/01/d.jpg) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                DOCOMO コンテンツ管理システム(CMS)
                            </CardText>
                            <Button colored onClick={this.handleOpenDialog3} raised ripple target="1">詳細</Button>
                            <Dialog open={this.state.openDialog3} onClick={this.handleCloseDialog3} keyType="1" style={{
                                color: 'black', height: '80%', margin: 'auto', width: '60%'
                            }}>
                                <div>
                                    <Grid >
                                        <Cell className="modal" col={12} style={{textAlign:'left'}}>

                                            <h2>DOCOMO コンテンツ管理システム(CMS)</h2>
                                            <hr style={{ borderTop: '5px solid #395181'}}></hr>
                                            <h4>勤務先</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '8%' }}></hr> 
                                            日本 東京 [DOCOMO]<br/><br/>
                                            <h4>プロジェクト期間</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '21%' }}></hr>
                                            2017.12~2018.3<br/><br/>

                                            <h4>プロジェクト内容＆役割</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '28%' }}></hr>
                                            コンテンツ管理システムの運用に従う維持保守、テスト作業を担当<br/><br/>

                                            <h4>開発環境</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '11%' }}></hr>
                                            Window10　/　Tera Term

                                          </Cell>

                            
                                    </Grid></div>
                            </Dialog>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*denso*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.eetasia.com/wp-content/uploads/sites/2/images/c62d7015-fde1-4934-9993-0ccf6e27e14b.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                DENSO 車両通信モジュール(DCM)
                            </CardText>
                            <Button colored onClick={this.handleOpenDialog4} raised ripple target="1">詳細</Button>
                            <Dialog open={this.state.openDialog4} onClick={this.handleCloseDialog4} keyType="1" style={{
                                color: 'black', height: '80%', margin: 'auto', width: '60%'
                            }}>
                                <div>
                                    <Grid >
                                        <Cell className="modal" col={12} style={{textAlign:'left'}}>

                                            <h2>DENSO 車両通信モジュール(DCM)</h2>
                                            <hr style={{ borderTop: '5px solid #395181'}}></hr>
                                            <h4>勤務先</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '8%' }}></hr> 
                                            日本 名古屋 [DENSO]<br/><br/>
                                            <h4>プロジェクト期間</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '21%' }}></hr>
                                            2018.4~2019.3<br/><br/>
                                            <h4>プロジェクト内容＆役割</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '28%' }}></hr>
                                            コンテンツ管理システムの運用に従う維持保守、テスト作業を担当<br/><br/>

                                            <h4>開発環境</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '11%' }}></hr>
                                            Window10　/　Tera Term

                                          </Cell>

                            
                                    </Grid></div>
                            </Dialog>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*toyota*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX/////AAD/0dH/7+//kpL/Tk7/19f/lpb/wsL/zs7/Z2f/k5P/paX//Pz/3d3/vr7/ra3/9/f/5ub/qan/8/P/d3f/ubn/4uL/jY3/a2v/Jib/YWH/ycn/hob/fn7/oaH/MTH/W1v/cXH/LCz/Pj7/VVX/e3v/RUX/srL/ODj/GRn/DQ3/QED/m5v/S0v/Hx/qbZZMAAAJNElEQVR4nO2baVfCOhCGyyI7RRAqCogbsrn8/393TdOZTJIJ6r2eo+f6Pp8kSafpm8lkktYsAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgD/LdJK3Wq180vjpjvxqJqP21WNNsu81i8uf7tbv43KwqKXYrPOf7t4vIp8fWZnDdjFb9dvt1az3+uYEu6n/dCd/BxfXVo/j/UXXxqnJfHFjnalRP3+i6pfxT/byNzCeV1Pt3MXzF+tL/HtaVFP06W/H/KZVoTkVZS/VzHsSZeN1NRuH33LbvFj3++viv4fCy9Gg31zvWt/Qp4/oVKp4CrQ4To28xpWu56qlcbeepjvx2o7EUnK3kzVLuiAaEjK/lDXLK2fo7HyoXqAiB2nCvTwZZYYLTZNMRHW/olJxO81iJsml1LAWLQdhZdvVNalsHpjvsCaubHcMDK2kXCf7sxANr7WORORVmwu/uCgLb7XLl9UVy6+K5W7RCp/Q0Il7HgRHbsqjf/mgGNopV2hcuXYtUZzWapRoYvq7n2bDjVJHGes6C/mkWH29nqMjDWDtzrNOUdTFgAvdUO/LYt2L4k6WgO925pe3WCPjXIVf+UQXrf6dWL1UA+7EDZV0hfEpFT5SySplaP9FscZqLwJ2rolfYXprFTaj7A+wmN9hUPmUWFfpFtxPKrgWxlljWiiSWr3Hj6+JtfbK/YWI6L7XHM5tC99LRD/NRPSWmMobX55rXnj4WCw7bcUcPDaXeb5sO/Frs8oQh3IR56ioWRWcC9OrTp5313tXcPcJsVyA90NoNGEMpV+3GkEfDJfvvwei3zKWUx/r5YX+/nrYIKa0DMzHXDb2nlnM7qXrLK3Jd1TA43RbFRzigeEYVne62+43XIeq8lfXH17PlzUfTaxtrXTFs6rJ1j24EYRXopqcbg16ioP1kUOWgEQJV2LW5Vm6K2tD4nCAoh0ERwzanbIbXcskxkXqMLWpirWItAnE2sVNisqkG6I7iqf3UoV3U6+kgOtLvbr/iypVUizOr579claLxoWXnon3rLX7qp6X8Tff0IzKr/zyE2LR3KpVe77abdzGFJcxggPEO6syOX5w0SPL2jXrmN35wbUbUE0tsfNJiMUGwssOYQV5jh2oeVjNCVa4UX1MVKTFItsb7l20bypcqVTrXdcnMwudK5plYL3yjwNt3C2HJOFaulh8p1GqPYd0dvhOJga/CJsPQkN8XdMvT4vl+kQL9X3Y5NWU0g3EgkQc9tvNZvP6eIirWHmj4PErYtHy/xBfQIFjSwU04EdRyY/KaUNsaCau+4xYhTPVpT+DDeLYV9DPNE7jwn2ZBuiHBrpYZELZh7PT8QSlteDFPQRPrTfVfAnn/36+lBSL5vtK9C/YnJR9Ez48bH9SqtU0bUSginVJRrRdONVx1s4SDcnx+Rk45dZGiuoKrTQSK5emSITAK8tifxtUhEtozNZfVcsbzTINVSzyHnXqbqtK53UUQigSuMnLIUszRJf1vdKUWDRrb80Pjo3LuE03uHBcyB1lSG8XOsREvb33OJ5YlA/caVfQltMF5mHQAedGpPqtZojcwx/FhFh8D7uwvFa/Nl6jniaWodFpP0c63fZH2o5pkuywLhadG0SrjYECuthtFF4nbuIKdaAol+t5pYkrOPEb+nf0Eo9SrMRphBmaRmvZGRWjzrLVuE5NNTsN92qVKhYtI2HCWKKIxQNdIsq/Tyya4ld+M/+MoHT64MSPaPo9OyZcoZoNG7VKFYv2leolM+UKjiHByNI0vA6NUPcNT16pLhYvIjTJ+HRItipnRMJhTJ0IT9F9mXbcJ0IVa6n1hKAl3FtD+MDPj3P5KUML7dYJsagtLzlsWa6lS6+Jj/Fjt6s2IVA9tahmif7uQhWLs2slAHKk9fcavK0Zf6KxhepGWqkvFnvuakpHI5TBPYpm9nZ6Qml2+G7tNMlRX203Tj149lFSGp9Iy0RaQhvm4JxRZpIBcQYrb+2LlTjgjrQpHfAm0zAR4SLxS1LGa2XnYtDFSmxFDPT4QTyj6BTs9PgpY0N3VU3QMVWsE1p5McrGD/UtWV4LTx30ZbO0oM/ChFg86pH6vNsp9PJALN4LhCfbLl8NvFcTi895VOTBSBkNVNcyJ29u7E1er07XQWJovT4Hmzd+HRkcoLhXBoGdhFic70dd441/4AeaWGxERe7j7Cir312Zion8oTmgPcxUThVLEmJxZDr4JunQOIpmKbHq/Ey+7HTuG0UzRSx2Tx3vFLjMS4ODRndH6rVx1fRe7lmrMaSOlfk0+CgWhimvedGdUmJld/xQYkUcOl8JTxcVsTinWvQEV7yB6UbXL7KYuVDRCNdT2tgTJe34oCQllnjP0KTnEedDUSqQFEu861uRl4oXPlGUVcSitkFqy11cxKXK6lv20KYpZZKmnMIMYu09UmLJd5W1xWA0upDvEeNj16RYbrGoma8S3w3NREEci2OxWNrw8dg9PVeoJ9Syo1YOfDlB4vhutUoFrOyEWO67jxhlR5EWy3txGKAca8Ri8fFwGJF5PP300o5OvK8tp+1tIxvaeBnVzz/S6oRYWfKYUds4nRArrZYWWiKx6unWbMgvtluhfRh6qo17tdCHrmc/F9E+o3GcECuV3qiZ7ymxvJkoUPcbkVj8OUD8HDyhg/cqU7s8BU7ifSkRzkKbzh70bQ5xSqys4R29WPa6vZNiZWPl4+o3/QPAUKxkZic6796eEDaGbP2+yqj76NU0bP8SBxbR/fSHzJb+q7XaQ/RurCKxN3T3OfMNHVKxIXx83jBpljmzjaL1pXWueymX/MRDuunUZgxvH37iPZk3DfPk106XTU5Er1fpr0Hzj+xkkxcW/nDi0/NVaafJK1/b/m7ONY/uzJvJ2xb2rdNCZAJuHRbrR14d0ScODb/KMO8URaf1Dd+K58tvMvQpdjaWH/vsdywWBf/Julpr9Xdff4ourQ6zXblfpHOxUr1JcVNN4016Pvwpxjt+cbi/mp/bTUhz17/nmPB6kdze/EWW89SxxX7V+fP/iKKQF+3ZmfsO/vB63/+G/4L4nzMcj8ff838nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4f/wDj4Wzn1zwiCAAAAABJRU5ErkJggg==) center / cover'
                           }}>

                            </CardTitle>
                            <CardText>
                                TOYOTA 連携システム
                            </CardText>
                            <Button colored onClick={this.handleOpenDialog5} raised ripple target="1">詳細</Button>
                            <Dialog open={this.state.openDialog5} onClick={this.handleCloseDialog5} keyType="1" style={{
                                color: 'black', height: '80%', margin: 'auto', width: '60%'
                            }}>
                                <div>
                                    <Grid >
                                        <Cell className="modal" col={12} style={{textAlign:'left'}}>

                                            <h2>TOYOTA 連携システム</h2>
                                            <hr style={{ borderTop: '5px solid #395181'}}></hr>
                                            <h4>勤務先</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '8%' }}></hr> 
                                            日本 名古屋 [TOYOTA]<br/><br/>
                                            <h4>プロジェクト期間</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '21%' }}></hr>
                                            2019.4~2019.9<br/><br/>
                                            <h4>プロジェクト内容＆役割</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '28%' }}></hr>
                                            トヨタ連携システム　検証＆改修＆維持保守 担当<br/><br/>

                                            <h4>開発環境</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '11%' }}></hr>
                                            Window10　／　Tera Term　／　Oracle

                                          </Cell>

                            
                                    </Grid></div>
                            </Dialog>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*Toyata systems*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://d3lckkmmuve1sw.cloudfront.net/attachments/0dfea67a48e300a717950687abd40afaa0b15517/store/c91aef7a3041e862f6beb3c2d6a743287364638ce00bfc8937c83c912db2/80208231.png) center / cover'
                            }}>

                            </CardTitle>
                            <CardText>
                                TOYOTA SYSTEMS KITORA FW
                            </CardText>
                            <Button colored onClick={this.handleOpenDialog6} raised ripple target="1">詳細</Button>
                            <Dialog open={this.state.openDialog6} onClick={this.handleCloseDialog6} keyType="1" style={{
                                color: 'black', height: '80%', margin: 'auto', width: '60%'
                            }}>
                                <div>
                                    <Grid >
                                        <Cell className="modal" col={12} style={{textAlign:'left'}}>

                                            <h2>TOYOTA SYSTEMS KITORA FW</h2>
                                            <hr style={{ borderTop: '5px solid #395181'}}></hr>
                                            <h4>勤務先</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '8%' }}></hr> 
                                            日本 名古屋 [TOYOTA SYSTEMS]<br/><br/>
                                            <h4>プロジェクト期間 </h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '21%' }}></hr>
                                            2019.10~2020.3<br/><br/>
                                            <h4>プロジェクト内容＆役割</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '28%' }}></hr>
                                            TOYOTA SYSTEMS KITORA FW 維持保守 担当<br/><br/>

                                            <h4>開発環境</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '11%' }}></hr>
                                            Window10　／　Tera Term　／　HTML　／　CSS

                                          </Cell>

                            
                                    </Grid></div>
                            </Dialog>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*React*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                            　車両運行管理システム
                            </CardText>
                            <Button colored onClick={this.handleOpenDialog7} raised ripple target="1">詳細</Button>
                            <Dialog open={this.state.openDialog7} onClick={this.handleCloseDialog7} keyType="1" style={{
                                color: 'black', height: '80%', margin: 'auto', width: '60%'
                            }}>
                                <div>
                                    <Grid >
                                        <Cell className="modal" col={12} style={{textAlign:'left'}}>

                                            <h2>Open Sesame Tec 車両運行管理システム</h2>
                                            <hr style={{ borderTop: '5px solid #395181'}}></hr>
                                            <h4>勤務先</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '8%' }}></hr> 
                                            日本 名古屋 [Open Sesame Tec]<br/><br/>
                                            <h4>プロジェクト期間 </h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '21%' }}></hr>
                                            2020.4~2020.9<br/><br/>
                                            <h4>プロジェクト内容＆役割</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '28%' }}></hr>
                                            車両運行管理システム開発 フロントエンド 担当<br/><br/>

                                            <h4>開発環境</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '11%' }}></hr>
                                            Window10　／　React　／　Materia UI

                                          </Cell>

                            
                                    </Grid></div>
                            </Dialog>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={SARAM} alt="kannrisystem" style={{ height: '178px' }} />
                            <CardText>
                            AI アノテーション管理システム
                            </CardText>
                            <Button colored onClick={this.handleOpenDialog8} raised ripple target="1">詳細</Button>
                            <Dialog open={this.state.openDialog8} onClick={this.handleCloseDialog8} keyType="1" style={{
                                color: 'black', height: '80%', margin: 'auto', width: '60%'
                            }}>
                                <div>
                                    <Grid >
                                        <Cell className="modal" col={12} style={{textAlign:'left'}}>
　
                                            <h2>AIアノテーション学習データ管理システム</h2>
                                            <hr style={{ borderTop: '5px solid #395181'}}></hr>
                                            <h4>勤務先</h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '8%' }}></hr> 
                                            韓国 ソウル [Media Group 人と森]<br/><br/>
                                            <h4>プロジェクト期間 </h4>
                                            <hr style={{ borderTop: '5px solid #395181', width: '21%' }}></hr>
                                            2020.12~現在<br/><br/>
                                            <h4>プロジェクト内容＆役割</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '28%' }}></hr>
                                            アノテーション管理システム　バックエンド ＆ フロントエンド 担当<br/><br/>

                                            <h4>開発環境</h4> 
                                            <hr style={{ borderTop: '5px solid #395181', width: '11%' }}></hr>
                                            Window10　／　React　／　SPRING BOOT　／　Maria DB　／　MyBatis 

                                          </Cell> 

                            
                                    </Grid></div>
                            </Dialog>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>


                    </div></div >
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <div className="projects-grid">

                        {/*Project1*/}

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={Port} alt="kojinProject" style={{ height: '178px' }} />
                            <CardText>
                                React ポートフォリオ
                        </CardText>
                            <CardActions border>
                                <Button a href="https://github.com/parkshhy/main" target="_blank">⚙️GIT HUB</Button>
                                <Button a href="https://parkshhy.github.io/main/" target="_blank">🖥WEB PAGE</Button>
                            </CardActions>
                        </Card>

                        {/*Project2*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={Todo} alt="kannrisystem" style={{ height: '178px' }} />
                            <CardText>
                                React Todo 管理システム
                        </CardText>

                            <CardActions border>
                                <Button a href="https://github.com/parkshhy/todo" target="_blank">⚙️GIT HUB</Button>
                                <Button a href="https://parkshhy.github.io/todo/" target="_blank">🖥WEB PAGE</Button>
                            </CardActions>
                        </Card>

                        {/*Project3*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.filepicker.io/api/file/pYSVfRZFSixwoQtS1XQH) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                            React native 天気アプリ
                        </CardText>

                            <CardActions border keyType="1">
                           <Button disabled>is comming soon</Button> 
                            
                            </CardActions>
                        </Card>


                    </div>
                </div>

            )
        } else if (this.state.activeTab === 0) {
            return (
                <div>
                    <div className="projects-grid">
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={JAVABOOK} alt="spring" style={{ width: '59%',margin: 'auto' }} />
                            <CardText>
                               JAVA 
                            </CardText>
                        </Card>

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={SPRING} alt="spring" style={{ width: '100%' }} />
                            <CardText>
                                SPRIG BOOT
                            </CardText>
                        </Card>

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={SPRING1} alt="spring" style={{ width: '53%',margin: 'auto'  }} />
                            <CardText>
                                SPRIG BOOT
                            </CardText>
                        </Card>        

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={ReactBook} alt="spring" style={{ width: '60%',margin: 'auto'  }} />
                            <CardText>
                                REACT
                            </CardText>
                        </Card>  

                    </div>
                </div>

            )
        }

    }


    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab}
                    onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab><strong>↳個人勉強</strong></Tab>
                    <Tab><strong>↳教育機関 プロジェクト</strong></Tab>
                    <Tab><strong>↳個人プロジェクト</strong></Tab>
                    <Tab><strong>↳経歴事項</strong></Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;

