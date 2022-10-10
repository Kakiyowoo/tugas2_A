import React from "react";

import {
  Column,
  Row,
  Text,
  Stack,
  Line,
  Button,
  Img,
  List,
  RatingBar,
} from "components";

const LandingPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-quicksand items-center justify-end mx-[auto] lg:py-[20px] xl:py-[25px] 2xl:py-[29px] 3xl:py-[34px] w-[100%]">
        <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[86%]">
          <header className="w-[100%]">
            <Row className="items-center w-[100%]">
              <Row className="items-start w-[12%]">
                <Text
                  className="flex items-center mb-[4px] text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  🍔
                </Text>
                <Text
                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[4px] text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Foodyar
                </Text>
              </Row>
              <Stack className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[304px] xl:ml-[380px] 2xl:ml-[428px] 3xl:ml-[513px] rounded-radius916 w-[37%]">
                <Line className="absolute bg-deep_orange_50 bottom-[17%] h-[4px] left-[0] rounded-radius2 w-[12%]" />
                <Text
                  className="absolute not-italic text-bluegray_900 w-[auto]"
                  variant="body2"
                >
                  <span className="text-bluegray_900 font-quicksand font-medium lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Home
                  </span>
                  <span className="text-bluegray_900 font-quicksand font-normal lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    {" "}
                  </span>
                  <span className="text-bluegray_400 font-quicksand font-normal lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    Beverages Chef Ingredient Stories
                  </span>
                </Text>
              </Stack>
              <Button className="font-medium lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[13%]">
                My Kitchen
              </Button>
            </Row>
          </header>
          <Row className="items-start 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[93%]">
            <Column className="justify-start lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[46%]">
              <Stack className="xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] lg:h-[81px] w-[81%]">
                <Column className="absolute bottom-[4%] inset-x-[0] justify-start mx-[auto] w-[96%]">
                  <div className="bg-deep_orange_50 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius4 w-[19%]"></div>
                  <div className="bg-deep_orange_50 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] lg:ml-[140px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] rounded-radius4 w-[52%]"></div>
                </Column>
                <Text
                  className="absolute lg:leading-[49px] xl:leading-[62px] 2xl:leading-[70px] 3xl:leading-[84px] left-[0] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Eat What You Cook
                  <br />
                  With Us, Together!
                </Text>
              </Stack>
              <Text
                className="font-normal lg:leading-[24px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[40px] ml-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-bluegray_400 w-[72%]"
                variant="body1"
              >
                When you eat something that cooked by
                <br />
                yourself, the happiness is priceless.
              </Text>
              <Button
                className="font-medium ml-[1px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[40%]"
                variant="FillYellow700"
              >
                Decide a Menu
              </Button>
            </Column>
            <Img
              src="images/img_pic.png"
              className="lg:h-[288px] xl:h-[361px] 2xl:h-[406px] 3xl:h-[487px] w-[54%]"
              alt="pic"
            />
          </Row>
          <Stack className="2xl:h-[1073px] 3xl:h-[1288px] lg:h-[763px] xl:h-[954px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[100%]">
            <Column className="absolute items-center justify-start pt-[2px] top-[0] w-[100%]">
              <Column className="items-center justify-start w-[17%]">
                <Text
                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                  variant="body1"
                >
                  Watch Now
                </Text>
                <Text className="SpecialtoTry" as="h4" variant="h4">
                  Special to Try
                </Text>
              </Column>
              <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius1715 w-[41%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text
                    className="font-medium my-[1px] text-yellow_700 w-[auto]"
                    variant="body1"
                  >
                    Healthy Food
                  </Text>
                  <Text
                    className="font-normal mb-[2px] not-italic text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    Lunch
                  </Text>
                  <Text
                    className="font-normal mt-[2px] not-italic text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    Vege Desert
                  </Text>
                  <Text
                    className="font-normal mb-[2px] not-italic text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    Shake
                  </Text>
                </Row>
                <Line className="bg-yellow_700 h-[2px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius1 w-[16%]" />
              </Column>
              <List
                className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-4 min-h-[auto] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="items-center justify-start w-[100%]">
                  <Img
                    src="images/img_pic_300X287.png"
                    className="pic_One"
                    alt="pic One"
                  />
                  <Text className="SaladKiwiSugg" as="h6" variant="h6">
                    Salad Kiwi Sugga
                  </Text>
                  <Text
                    className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                    variant="body3"
                  >
                    Amir Samantha
                  </Text>
                  <Row className="items-center justify-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius1 w-[44%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="#f7c531"
                      size={((window.innerWidth - 15) * 22) / 1440}
                    ></RatingBar>
                  </Row>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Img
                    src="images/img_pic.png"
                    className="pic_One"
                    alt="pic Two"
                  />
                  <Text
                    className="lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-bluegray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Avocado Muscle
                  </Text>
                  <Text
                    className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                    variant="body3"
                  >
                    John Lennonk
                  </Text>
                  <Row className="items-center justify-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius1 w-[44%]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="#f7c531"
                      size={((window.innerWidth - 15) * 22) / 1440}
                    ></RatingBar>
                  </Row>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Img
                    src="images/img_pic.png"
                    className="pic_One"
                    alt="pic Three"
                  />
                  <Text className="SaladKiwiSugg" as="h6" variant="h6">
                    Bayam Red Poppeye
                  </Text>
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[44%]">
                    <Text
                      className="not-italic text-bluegray_400 w-[auto]"
                      variant="body3"
                    >
                      Toekang Sayoer
                    </Text>
                    <Row className="items-center justify-evenly 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-radius1 w-[100%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f7c531"
                        size={((window.innerWidth - 15) * 22) / 1440}
                      ></RatingBar>
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Img
                    src="images/img_pic.png"
                    className="pic_One"
                    alt="pic Four"
                  />
                  <Text className="SpecialtoTry" as="h6" variant="h6">
                    Naga Fruity Joss
                  </Text>
                  <Column className="items-center justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[47%]">
                    <Text
                      className="not-italic text-bluegray_400 w-[auto]"
                      variant="body3"
                    >
                      Imelda Saranghae
                    </Text>
                    <Row className="items-center justify-evenly 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-radius1 w-[94%]">
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="#f7c531"
                        size={((window.innerWidth - 15) * 22) / 1440}
                      ></RatingBar>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
            <Stack className="absolute bottom-[0] lg:h-[383px] xl:h-[479px] 2xl:h-[539px] 3xl:h-[646px] inset-x-[0] mx-[auto] 3xl:pr-[10px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] w-[67%]">
              <div className="absolute left-[0] overflow-x-auto top-[0] w-[100%]">
                <Row className="items-start justify-evenly w-[100%]">
                  <Text
                    className="text-bluegray_50 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    “
                  </Text>
                  <Text
                    className="lg:leading-[35px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] lg:mt-[188px] xl:mt-[235px] 2xl:mt-[265px] 3xl:mt-[318px] not-italic text-bluegray_900 text-center w-[80%]"
                    as="h3"
                    variant="h3"
                  >
                    Awalnya saya malu dengan mertua karena tidak bisa memasak,
                    kini mereka lebih suka makan malam di rumah demi menyantap
                    masakan yang saya buat sendiri
                  </Text>
                </Row>
              </div>
              <Row className="absolute bottom-[0] inset-x-[0] items-center justify-center mx-[auto] w-[32%]">
                <Stack className="3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] w-[34%]">
                  <Stack className="absolute 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] w-[100%]">
                    <div className="absolute bg-deep_purple_100 bottom-[0] lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] right-[0] rounded-radius50 lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"></div>
                    <div className="absolute bg-yellow_50 lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] left-[0] rounded-radius50 top-[0] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"></div>
                  </Stack>
                  <Img
                    src="images/img_image9.png"
                    className="absolute lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="imageNine"
                  />
                </Stack>
                <Column className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[59%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Camella Sarrah
                  </Text>
                  <Text
                    className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                    variant="body3"
                  >
                    Vege Master
                  </Text>
                </Column>
              </Row>
            </Stack>
          </Stack>
          <Row className="items-center justify-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] py-[1px] w-[69%]">
            <Column className="items-center my-[1px] w-[28%]">
              <Text className="text-bluegray_900 w-[auto]" as="h4" variant="h4">
                180.000+
              </Text>
              <Text className="MENUFOOD" variant="body1">
                MENU FOOD
              </Text>
            </Column>
            <Column className="items-center my-[1px] w-[26%]">
              <Text className="text-bluegray_900 w-[auto]" as="h4" variant="h4">
                20.000+
              </Text>
              <Text className="MENUFOOD" variant="body1">
                CHEFS
              </Text>
            </Column>
            <Column className="items-center my-[1px] w-[28%]">
              <Text className="text-bluegray_900 w-[auto]" as="h4" variant="h4">
                400.000+
              </Text>
              <Text className="MENUFOOD" variant="body1">
                COURSE
              </Text>
            </Column>
            <Column className="items-center mt-[2px] w-[18%]">
              <Text className="text-bluegray_900 w-[auto]" as="h4" variant="h4">
                6.900.000
              </Text>
              <Text className="MENUFOOD" variant="body1">
                ALUMNI
              </Text>
            </Column>
          </Row>
          <Row className="items-center justify-between 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] w-[83%]">
            <Img
              src="images/img_pic_538X428.png"
              className="lg:h-[383px] xl:h-[479px] 2xl:h-[539px] 3xl:h-[646px] w-[42%]"
              alt="pic Five"
            />
            <Column className="w-[43%]">
              <Stack className="xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] lg:h-[81px] w-[100%]">
                <Column className="absolute bottom-[4%] justify-start w-[100%]">
                  <div className="bg-deep_orange_50 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius4 w-[51%]"></div>
                  <div className="bg-deep_orange_50 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] lg:ml-[135px] xl:ml-[169px] 2xl:ml-[191px] 3xl:ml-[229px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] rounded-radius4 w-[57%]"></div>
                </Column>
                <Text
                  className="absolute lg:leading-[49px] xl:leading-[62px] 2xl:leading-[70px] 3xl:leading-[84px] left-[0] text-bluegray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Download our app
                  <br />
                  and join the contest
                </Text>
              </Stack>
              <Text
                className="font-normal lg:leading-[24px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[40px] ml-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-bluegray_400 w-[78%]"
                variant="body1"
              >
                In order to improve our cooking skills,
                <br />
                we do need a food photography{" "}
              </Text>
              <Row className="items-center ml-[1px] lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[77%]">
                <Img
                  src="images/img_aivalableonth.png"
                  className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] w-[49%]"
                  alt="aivalableonth"
                />
                <Img
                  src="images/img_googleplaydow.png"
                  className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[45%]"
                  alt="googleplaydow"
                />
              </Row>
            </Column>
          </Row>
        </Column>
        <footer className="lg:mt-[106px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Line className="bg-gray_200 h-[1px] w-[100%]" />
            <Row className="items-start justify-end ml-[auto] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] pr-[2px] pt-[2px] w-[81%]">
              <Row className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[13%]">
                <Text
                  className="flex items-center mb-[4px] text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  🍔
                </Text>
                <Text
                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[4px] text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Foodyar
                </Text>
              </Row>
              <Column className="justify-start 3xl:ml-[118px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] mt-[2px] w-[19%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Special Course
                </Text>
                <Text
                  className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-bluegray_400 w-[auto]"
                  variant="body2"
                >
                  Wedding Foods
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 underline w-[auto]">
                  Healthy and Muscle
                </Text>
                <Text className="OfficeFoodDai" variant="body2">
                  Office Food Daily
                </Text>
                <Text className="OfficeFoodDai" variant="body2">
                  Happy Kids
                </Text>
              </Column>
              <Column className="justify-start 3xl:ml-[118px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] mt-[3px] w-[19%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Company
                </Text>
                <Text
                  className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-bluegray_400 w-[auto]"
                  variant="body2"
                >
                  APIs Developer
                </Text>
                <Text
                  className="lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_400 w-[auto]"
                  variant="body2"
                >
                  Career
                </Text>
                <Text className="OfficeFoodDai" variant="body2">
                  Terms & Conditions
                </Text>
                <Text
                  className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-bluegray_400 w-[auto]"
                  variant="body2"
                >
                  Privacy Policy
                </Text>
              </Column>
              <Column className="justify-start 3xl:ml-[118px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] 3xl:mr-[106px] lg:mr-[63px] xl:mr-[79px] 2xl:mr-[89px] w-[17%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Be Our Friend
                </Text>
                <Text
                  className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic text-bluegray_400 w-[auto]"
                  variant="body2"
                >
                  3, Season Park, Jakarta
                </Text>
                <Text className="OfficeFoodDai" variant="body2">
                  support@foodyar.co,id
                </Text>
                <Text
                  className="lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_400 w-[auto]"
                  variant="body2"
                >
                  021 - 1111 - 2222
                </Text>
              </Column>
            </Row>
            <Line className="bg-gray_200 h-[1px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[100%]" />
            <Text
              className="lg:ml-[341px] xl:ml-[427px] 2xl:ml-[480px] 3xl:ml-[576px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic text-bluegray_400 w-[auto]"
              variant="body3"
            >
              All Rights Reserved Foodyar by Pixel from BuildWith Angga 2020
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default LandingPagePage;
