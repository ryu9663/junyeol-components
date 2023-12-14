/**
 * @deprecated constants 디렉토리를 이용해주세요.
 */
export const DUMMY = {
  TABLE_TITLE: {
    COPYABLE_COLUMN: 3,
    LONG_TEXT_COLUMN: 5,
    LONG_TEXT_COPYABLE_COLUMN: 1,
  },
  TABLE_BODY: {
    ROW_COUNT: 30,
    COLUMN_COUNT: 10,
  },
  COMMON: {
    TEXT_MIDDLE: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
        Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
        suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
        scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
        tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
        rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
        non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
        fermentum augue.`,
    TEXT_LONG: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        consectetur vulputate ultrices. Proin vestibulum velit et ornare
        lacinia. Sed consequat, enim quis mollis ultrices, sem diam pulvinar
        ligula, suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
        scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
        tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
        rutrum lorem, id tincidunt enim augue sed felis. In ante metus,
        dignissim non est nec, ultrices pulvinar est. Fusce ac accumsan turpis,
        eget fermentum augue. Curabitur odio massa, tincidunt vitae condimentum
        nec, iaculis et augue. Nunc sapien eros, congue sit amet enim sed,
        malesuada elementum felis. Curabitur auctor, magna egestas tincidunt
        tristique, nisl enim malesuada felis, eu laoreet ligula urna in sapien.
        Vestibulum commodo tincidunt felis, eget euismod sapien lacinia nec. Sed
        a quam diam. Maecenas in tortor dolor. Mauris eros tortor, tincidunt
        quis blandit vitae, finibus ut augue. Nunc ac facilisis sem. Suspendisse
        maximus eros aliquet blandit volutpat. Aenean ac tortor rhoncus,
        venenatis diam sit amet, porta tortor. Sed sit amet ante sit amet lectus
        sollicitudin pretium. Sed a odio ligula. Curabitur porta ex sit amet
        mauris condimentum finibus. Nam in augue dolor. Vivamus at purus sed
        augue iaculis lacinia. Duis congue sem nisi, non cursus tortor porttitor
        non. Morbi commodo consectetur erat et aliquet. Quisque ullamcorper
        faucibus neque a luctus. Aliquam semper tortor lorem. Nunc ac ante eu
        velit porta dapibus et maximus libero. Donec non magna eu dolor
        ullamcorper pulvinar eget sed urna. Ut condimentum velit non nibh
        sagittis, ac pharetra nisi sollicitudin. Mauris blandit suscipit sapien.
        Etiam at turpis quis mauris lacinia semper quis ac tellus. Curabitur ut
        pretium odio. Sed nunc eros, faucibus id ipsum et, ultricies iaculis
        nisl. Nunc pretium, enim a ornare malesuada, enim sapien venenatis
        risus, in facilisis nibh dolor nec mi. Etiam ut lorem dictum lorem
        vehicula dapibus ac in dui. Nunc dignissim a quam egestas pharetra. Nunc
        rutrum ipsum nec quam ultrices ultrices. Donec sed justo vel nunc tempor
        accumsan. Mauris maximus sodales bibendum. Aliquam non odio convallis,
        efficitur velit non, convallis augue. Sed id arcu sem. Donec interdum
        leo nunc, id condimentum ligula fringilla non. Nullam eros sapien,
        ultricies nec felis ac, mattis ullamcorper quam. Quisque at aliquam
        neque, mollis pellentesque turpis. Cras at arcu vitae quam fermentum
        volutpat. Nunc eu sapien nisi. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Aenean tincidunt libero
        vitae ante bibendum pellentesque. Mauris tempus bibendum orci, non
        mattis nisi. Phasellus fringilla ut nisi ultrices convallis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed luctus est ut enim
        molestie, in condimentum eros aliquet.`,
  },
};

export const getCustomDateString = (daysAgo: number) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - daysAgo); // 'daysAgo' 만큼 일 수를 감소시킴

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  const timezoneOffset = currentDate.getTimezoneOffset() / 60;
  const timezoneOffsetString = `${timezoneOffset >= 0 ? "+" : "-"}${Math.abs(
    timezoneOffset
  )
    .toString()
    .padStart(2, "0")}:00`;

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezoneOffsetString}`;
};

// eslint-disable-next-line storybook/prefer-pascal-case
export const tableData = {
  titles: [
    "학교",
    "이름",
    "학번",
    "학점",
    "군필",
    "졸업여부",
    "자기소개",
    "복사가능한 자기소개",
  ],
  bodies: [
    {
      학교: "충북대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: "안녕하세요 ",
      복사가능한_자기소개: "안녕하세요 copy",
    },
    {
      학교: "서울대학교",
      이름: "류준열2",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `안녕하세요 여러분 이건 매우 긴 텍스트입니다. 
        처음에는 말줄임표로 나타나지만, 
        Hover하면 전체 내용을 볼 수 있답니다.`,
      복사가능한_자기소개: `안녕하세요 여러분 이건 매우 긴 텍스트입니다. 
        처음에는 말줄임표로 나타나지만, 
        Hover하면 전체 내용을 볼 수 있답니다.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
    {
      학교: "하버드대학교",
      이름: "류준열",
      학번: "2015039077",
      학점: 4.5,
      군필: true,
      졸업여부: true,
      자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
      복사가능한_자기소개: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean nec mollis nulla. 
Phasellus lacinia tempus mauris eu laoreet. 
Proin gravida velit dictum dui consequat malesuada.`,
    },
  ],
};
