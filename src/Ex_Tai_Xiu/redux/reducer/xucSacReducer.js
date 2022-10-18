import { PLAY_GAME } from "../../constants/xucSacContants";

//code viết từ html trong public, nên đường dẫn img lấy từ mục xuc_sac
const initialState = {
  luachon: "",
  soBanThang: 0,
  soLuotChoi: 0,
  mangXucSac: [
    {
      img: "./xuc_sac/1.png",
      giaTri: 1,
    },
    {
      img: "./xuc_sac/1.png",
      giaTri: 1,
    },
    {
      img: "./xuc_sac/1.png",
      giaTri: 1,
    },
  ],
};

export let xucSacReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLAY_GAME: {
      let newMangXucSac = [];
      state.mangXucSac.forEach((item) => {
        let ramdomNum = Math.floor(Math.random() * (6) + 1);
        let newXucSac = {
          img: `./xuc_sac/${ramdomNum}.png`,
          giaTri: ramdomNum,
        };
        newMangXucSac.push(newXucSac);
      });
      state.mangXucSac = newMangXucSac;
      return { ...state };
    }
    default:
      return state;
  }
};
