export default function NonMemberInfo() {
  const List = [
    { title: '주문번호', info: 'abc1234455569' },
    { title: '이름', info: 'abc2222' },
    { title: '연락처', info: '010-0000-0000' },
    {
      title: '주소',
      info: '서울 강남구 강남대로 324 역삼디오슈페리움 2층 모두의연구소',
    },
  ];

  return (
    <>
      <ul>
        {List.map((list, index) => (
          <li
            key={index}
            className={`flex ${index < 2 ? 'mt-[35px]' : 'mt-[30px]'}`}
          >
            <strong className="block w-40 font-bold">{list.title}</strong>
            <span className="block w-[calc(100%-160px)] font-medium">
              {list.info}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
