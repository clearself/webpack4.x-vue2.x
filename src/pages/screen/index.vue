<template>
    <section class="big-screen">
        <div class="big-screen-header">
            <div class="big-screen-header-wrapper">
                <img src="../../assets/img/screen/header.png" class="big-screen-header-bg" />

                <img src="../../assets/img/screen/reading.png" class="big-screen-header-reading" />

                <div class="big-screen-header-title">
                    <img src="../../assets/img/screen/title.png" class="big-screen-header-title-bg" />

                    <img src="../../assets/img/chowa.svg" class="big-screen-header-title-logo" />

                    <div class="text">
                        <b>海淀区 — 智慧物业调度与统计中心</b>
                        <p>助力物业服务升级，用心服务万千业主 —— 卓瓦科技</p>
                    </div>
                </div>

                <div class="big-screen-header-total">
                    <Row>
                        <Col :span="8">
                            <Icon type="maintain" />
                            <div>
                                <h5>累计受理维修工单</h5>
                                <p>
                                    100
                                    <small>次</small>
                                </p>
                            </div>
                        </Col>
                        <Col :span="8">
                            <Icon type="report" />
                            <div>
                                <h5>累计响应投诉建议</h5>
                                <p>
                                    100
                                    <small>次</small>
                                </p>
                            </div>
                        </Col>
                        <Col :span="8">
                            <Icon type="movecar" />
                            <div>
                                <h5>累计帮助业主挪车</h5>
                                <p>
                                    100
                                    <small>次</small>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

        <div class="big-screen-body">
            <div class="left">
                <div class="user-box">
                    <Row :gutter="12" class="total-wrapper">
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/building.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区房产</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/ower.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>注册业主</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/car.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区车辆</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/pet.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区宠物</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/pet.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区宠物</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/pet.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区宠物</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/pet.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区宠物</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/pet.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区宠物</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/pet.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区宠物</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/pet.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区宠物</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                        <Col :span="6">
                            <div class="card total">
                                <img src="../../assets/img/screen/pet.png" class="item" />
                                <img src="../../assets/img/screen/staring.png" class="star" />

                                <!-- <h5>100</h5> -->
                                <p>小区宠物</p>

                                <img src="../../assets/img/screen/moring.png" class="moring" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <IotChart />
            </div>

            <div class="center">
                <MapChart :detail="detail.iot" :log="detail.log" />
                <OrderChart  />
            </div>

            <div class="right">
                <EntranceChart :detail="detail.current" />

                <OnlineChart />
            </div>
        </div>

        <Spin size="large" fix v-if="fetching" />
    </section>
</template>

<script>

import { Row, Col, Icon, Spin } from 'view-design'
import IotChart from './components/iot'
import MapChart from './components/map'
import OrderChart from './components/order'
import EntranceChart from './components/entrance'
import OnlineChart from './components/online'

export default {
    name: 'StatisticScreen',
    components: {
        Row,
        Col,
        Icon,
        Spin,
        IotChart,
        MapChart,
        OrderChart,
        EntranceChart,
        OnlineChart
    },
    data() {
        return {
            fetching: true,
            detail: {
                building_total: 0,
                ower_total: 0,
                car_total: 0,
                pet_total: 0,
                repair_total: 0,
                complain_total: 0,
                movecar_total: 0,
                cpu: 0,
                mem: 0,
                disk: 0,
                log: {
                    entrance: [
                        {
                            created_at: 1636869900013
                        },
                        {
                            created_at: 1636945500016
                        },
                        {
                            created_at: 1637042700014
                        },
                        {
                            created_at: 1637208300014
                        },
                        {
                            created_at: 1636873500013
                        },
                        {
                            created_at: 1636931100017
                        },
                        {
                            created_at: 1637100300016
                        },
                        {
                            created_at: 1637114700016
                        },
                        {
                            created_at: 1637298300022
                        },
                        {
                            created_at: 1637280300022
                        },
                        {
                            created_at: 1637291100022
                        },
                        {
                            created_at: 1636761900016
                        },
                        {
                            created_at: 1636848300013
                        },
                        {
                            created_at: 1636866300013
                        },
                        {
                            created_at: 1637017500014
                        },
                        {
                            created_at: 1637013900014
                        },
                        {
                            created_at: 1637125500016
                        }
                    ],
                    elevator: [
                        {
                            created_at: 1636776300012
                        },
                        {
                            created_at: 1636765500012
                        },
                        {
                            created_at: 1636790700013
                        },
                        {
                            created_at: 1636779900013
                        },
                        {
                            created_at: 1636859100010
                        },
                        {
                            created_at: 1636873500010
                        },
                        {
                            created_at: 1636938300014
                        },
                        {
                            created_at: 1636959900014
                        },
                        {
                            created_at: 1637031900012
                        },
                        {
                            created_at: 1637031900012
                        },
                        {
                            created_at: 1637121900013
                        },
                        {
                            created_at: 1637193900012
                        },
                        {
                            created_at: 1637208300012
                        },
                        {
                            created_at: 1637287500019
                        },
                        {
                            created_at: 1636841100010
                        },
                        {
                            created_at: 1636927500013
                        },
                        {
                            created_at: 1636941900014
                        },
                        {
                            created_at: 1636927500014
                        },
                        {
                            created_at: 1637114700012
                        },
                        {
                            created_at: 1637100300013
                        },
                        {
                            created_at: 1637219100012
                        },
                        {
                            created_at: 1637280300019
                        },
                        {
                            created_at: 1637280300020
                        },
                        {
                            created_at: 1637309100020
                        },
                        {
                            created_at: 1637287500020
                        }
                    ],
                    lamp: [
                        {
                            created_at: 1636761900018
                        },
                        {
                            created_at: 1636848300016
                        },
                        {
                            created_at: 1636869900016
                        },
                        {
                            created_at: 1637017500017
                        },
                        {
                            created_at: 1637219100017
                        },
                        {
                            created_at: 1637298300026
                        },
                        {
                            created_at: 1637298300026
                        },
                        {
                            created_at: 1636758300018
                        },
                        {
                            created_at: 1636761900018
                        },
                        {
                            created_at: 1636779900019
                        },
                        {
                            created_at: 1636848300016
                        },
                        {
                            created_at: 1636862700016
                        },
                        {
                            created_at: 1636869900016
                        },
                        {
                            created_at: 1636873500016
                        },
                        {
                            created_at: 1637046300017
                        },
                        {
                            created_at: 1637046300017
                        },
                        {
                            created_at: 1637039100017
                        },
                        {
                            created_at: 1637129100019
                        },
                        {
                            created_at: 1637132700019
                        },
                        {
                            created_at: 1637132700019
                        },
                        {
                            created_at: 1637190300017
                        },
                        {
                            created_at: 1637197500017
                        },
                        {
                            created_at: 1637219100017
                        },
                        {
                            created_at: 1637309100026
                        }
                    ],
                    repeater: [
                        {
                            created_at: 1636783500021
                        },
                        {
                            created_at: 1636862700020
                        },
                        {
                            created_at: 1636956300022
                        },
                        {
                            created_at: 1637042700020
                        },
                        {
                            created_at: 1637129100023
                        },
                        {
                            created_at: 1637211900021
                        },
                        {
                            created_at: 1637309100030
                        },
                        {
                            created_at: 1636787100026
                        },
                        {
                            created_at: 1636873500024
                        },
                        {
                            created_at: 1636945500026
                        },
                        {
                            created_at: 1637017500024
                        },
                        {
                            created_at: 1637121900027
                        },
                        {
                            created_at: 1637190300024
                        },
                        {
                            created_at: 1637298300034
                        }
                    ],
                    park: [
                        {
                            created_at: 1636776300030
                        },
                        {
                            created_at: 1636779900030
                        },
                        {
                            created_at: 1636772700030
                        },
                        {
                            created_at: 1636787100030
                        },
                        {
                            created_at: 1636779900030
                        },
                        {
                            created_at: 1636841100029
                        },
                        {
                            created_at: 1636934700030
                        },
                        {
                            created_at: 1637017500028
                        },
                        {
                            created_at: 1637017500028
                        },
                        {
                            created_at: 1637039100028
                        },
                        {
                            created_at: 1637046300028
                        },
                        {
                            created_at: 1637103900031
                        },
                        {
                            created_at: 1637100300031
                        },
                        {
                            created_at: 1637111100031
                        },
                        {
                            created_at: 1637186700029
                        },
                        {
                            created_at: 1637197500029
                        },
                        {
                            created_at: 1637208300029
                        },
                        {
                            created_at: 1637291100039
                        },
                        {
                            created_at: 1637301900039
                        }
                    ],
                    warning: [
                        {
                            created_at: 1636779900032
                        },
                        {
                            created_at: 1636783500032
                        },
                        {
                            created_at: 1636790700032
                        },
                        {
                            created_at: 1636776300032
                        },
                        {
                            created_at: 1636754700032
                        },
                        {
                            created_at: 1636949100032
                        },
                        {
                            created_at: 1636938300032
                        },
                        {
                            created_at: 1637042700031
                        },
                        {
                            created_at: 1637042700031
                        },
                        {
                            created_at: 1637121900034
                        },
                        {
                            created_at: 1637219100031
                        },
                        {
                            created_at: 1637211900031
                        },
                        {
                            created_at: 1636787100032
                        },
                        {
                            created_at: 1636772700032
                        },
                        {
                            created_at: 1636873500031
                        },
                        {
                            created_at: 1636855500031
                        },
                        {
                            created_at: 1636931100032
                        },
                        {
                            created_at: 1636938300032
                        },
                        {
                            created_at: 1636945500032
                        },
                        {
                            created_at: 1636963500032
                        },
                        {
                            created_at: 1636949100032
                        },
                        {
                            created_at: 1637039100031
                        },
                        {
                            created_at: 1637031900031
                        },
                        {
                            created_at: 1637035500031
                        },
                        {
                            created_at: 1637021100031
                        },
                        {
                            created_at: 1637107500034
                        },
                        {
                            created_at: 1637114700034
                        },
                        {
                            created_at: 1637107500034
                        },
                        {
                            created_at: 1637107500034
                        },
                        {
                            created_at: 1637129100034
                        },
                        {
                            created_at: 1637204700031
                        },
                        {
                            created_at: 1637208300031
                        },
                        {
                            created_at: 1637208300031
                        },
                        {
                            created_at: 1637208300031
                        }
                    ]
                },
                iot: {
                    center: {
                        lat: 32.4554143279405,
                        lng: 119.913609623909
                    },
                    entrance: [
                        {
                            lat: 32.45723398098214,
                            lng: 119.91213977336884,
                            online: 1
                        },
                        {
                            lat: 32.45744219764336,
                            lng: 119.91353452205658,
                            online: 1
                        },
                        {
                            lat: 32.45566781414969,
                            lng: 119.91060554981232,
                            online: 1
                        }
                    ],
                    elevator: [

                        {
                            lat: 32.4554143279405,
                            lng: 119.913609623909,
                            online: 1
                        },

                        {
                            lat: 32.45540527484841,
                            lng: 119.91651713848114,
                            online: 1
                        }
                    ],
                    lamp: [
                        {
                            lat: null,
                            lng: null,
                            online: 1
                        },
                        {
                            lat: null,
                            lng: null,
                            online: 0
                        }
                    ],
                    repeater: [

                        {
                            lat: 32.45380286321751,
                            lng: 119.91424262523651,
                            online: 1
                        },

                        {
                            lat: 32.45694428743545,
                            lng: 119.91724133491516,
                            online: 1
                        }
                    ],
                    park: [

                        {
                            lat: 32.453757596938324,
                            lng: 119.92080330848694,
                            online: 0
                        },

                        {
                            lat: 32.452453918338136,
                            lng: 119.91837859153748,
                            online: 0
                        }
                    ],
                    warning: [
                        {
                            lat: 32.45848327373062,
                            lng: 119.91091132164001,
                            online: 1
                        }
                        // {
                        //     lat: 32.4554143279405,
                        //     lng: 119.913609623909,
                        //     online: 1
                        // }
                    ]
                },
                current: {
                    entrance_current_day_log: [],
                    elevator_current_day_log: [],
                    park_current_day_log: []
                },
                order: {
                    repair_current_day: [],
                    complain_current_day: []
                },
                warning_current: [],
                notice: {}
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.fetching = false
        }, 2000)
    },
    methods: {

    }

}
</script>

<style lang="less">
.big-screen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: #2b315c;
    display: flex;
    flex-direction: column;

    &-header {
        width: 100%;
        flex: none;
        padding: 12px;
        position: relative;

        &-wrapper {
            position: relative;
            overflow: hidden;
        }

        &-bg {
            width: 100%;
            position: relative;
            z-index: 1;
        }

        &-reading {
            position: absolute;
            z-index: 2;
            bottom: 0;
            left: 37.82%;
            width: 1.6vw;
        }

        &-title {
            width: 42.78%;
            height: 77.14%;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            padding: 16px;
            display: flex;
            flex-direction: row;
            align-items: center;

            &-bg {
                position: absolute;
                top: -25%;
                right: -10%;
                max-width: none;
                height: 200%;
                width: 200%;
            }

            &-logo {
                height: 100%;
                margin-right: 14px;
                flex: none;
            }

            .text {
                line-height: 1;
                position: relative;
                z-index: 5;
            }

            b {
                font-size: 1.4vw;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                background-image: linear-gradient(
                    0deg,
                    rgb(147, 229, 255) 0%,
                    rgb(255, 255, 255) 100%,
                    rgb(255, 255, 255) 13%
                );
            }

            p {
                font-size: 0.8vw;
                color: #fff;
                margin-top: 0.6vw;
            }
        }

        &-total {
            width: 57%;
            position: absolute;
            top: 6.8%;
            right: 0;
            bottom: 12px;
            z-index: 5;

            .ivu-row {
                height: 100%;
            }

            .ivu-col {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 12px 12px 0;
            }

            .ivu-icon {
                font-size: 1.5vw;
                color: #fff;
                margin-right: 1vw;
                margin-bottom: 0.8vw;
            }

            h5 {
                color: #fff;
                font-size: 1vw;
                font-weight: 500;
                line-height: 1;
                margin-bottom: 0.3vw;
            }

            p {
                color: #fff;
                font-size: 1.4vw;

                small {
                    font-size: 1vw;
                    margin-left: 0.2vw;
                }
            }
        }
    }

    &-body {
        padding: 0 12px 12px;
        overflow: hidden;
        flex: auto;
        display: flex;
        flex-direction: row;

        .left {
            margin-right: 18px;
            flex: 0 0 26%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            .user-box{
                flex: none;
                margin-bottom: 18px;
                height: 50vh;
            }
            .total-wrapper {
                .total {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .item {
                        width: 4vw;
                    }

                    .star {
                        position: absolute;
                        top: 4px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 4vw;
                    }

                    h5 {
                        text-align: center;
                        font-size: 1vw;
                        font-weight: 500;
                        line-height: 1;
                        color: #fff;
                        margin-bottom: 0.2vw;
                    }

                    p {
                        text-align: center;
                        line-height: 28px;
                        color: #fff;
                        font-size: 0.6vw;
                    }

                    .moring {
                        width: 6vw;
                        margin-top: -2vw;
                        margin-bottom: -1.5vw;
                    }
                }
            }
        }

        .center {
            flex: auto;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        .right {
            flex: 0 0 26%;
            margin-left: 18px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .card {
            background-image: linear-gradient(rgb(57, 65, 120) 0%, rgb(38, 43, 85) 100%);
            border-radius: 8px;
            overflow: hidden;
            position: relative;
            padding: 8px 6px;

            &-title {
                color: #fff;
                line-height: 1.5vw;
                font-size: 0.8vw;
                font-weight: 400;
                margin-bottom: 0.8vw;
            }

            &.mr {
                padding: 16px 18px;
            }
        }
    }
}
</style>
