export default function Header() {
  return (
    <header className="flex justify-between px-[20px] py-[10px] bg-black">
      <h2>OZ코딩스쿨</h2>
      <ul
        className="flex justify-center items-center gap-[20px]
      *:list-none *:font-[400] *:text-[13px]">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </header>
  );
}
