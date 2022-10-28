html

1. gradient배경 추가
2. div id= page 큰 틀
3. page > 1 message-container ,2 menu , 3 view 3가지 추가

4. 1 message-container > div message > h1 p p(id moves) input 4가지
5. input에 id okbtn 버튼생성 클릭시 togglevisablity ???

6. 2 menu > 1. custom-select (div>select) 2. input 생성
7. select > option value값 10.15.25.38 easy med hard extra 생성
8. input에 onclick makeMazu() 함수 입력 start 버튼

9. 3 view > div(mazeContainer) > canvas 넓이 높이 id class 설정

css

1. scss 설정
2. html,body 초기화? position fixed 해주고 패딩 마진 다 0 높이넓이 100vw vh
3. page 전체 설정(가운데정렬,나머지 auto,폰트) /
4. mazeContainer css 추가 Top은 menuheight
   transition (property duration timing) 추가 top은 65px+10px ??
   inline-block ?? magin은 auto ?
   컨테이너 안의 mazeCanvas display: block으로 추가(+border)
5. input,select 디폴트 설정
   cursor:pointer로 설정, display:inline-block 설정
   hover active focus 일때 배경색 설정
6. select 화살표 이미지 삽입 화살표 이미지에도 inline-block
7. Message-Container - visivility:hidden 으로 숨김
   block fixed 설정 z-index:1로 앞에 보이도록 설정
   message가 중앙에 배치되도록 fixed / top,left 50% / margin-left,top -150 설정
8. page안에 #menu(h1,box-sizing:border-box ???),#view(absolute) 설정 추가
9. canvas의 클라스 border 추가
10. gradient 배경 추가
    z-index: -1로 맨뒤로, fixed 추가, background: linear-gradient
    gradient설정시 background-size: 400% 400% ???
    animation: Gradient 15s ease infinite 설정
11. small divce 크기에 맞춰 input select 크기 조절기능 추가

js

1. random, shuffle 함수를 만들어 놓는다.
   셔플은 크누스 셔플 이용(현대판 피셔에이츠)
2. changeBrigtness > 가상의 canvas 만드는 함수 추가
   1 createElement로 canvas추가 width,height 설정
   2 만든 가상캔버스에 getContext('2d')설정 context.drawImgae(sprite,좌표,크기)설정
   3 getImageData로 사본을뜨고 변경?후 putImgaeData로 출력
   4 new Image()로 새로운 이미지.src = 캔버스이미지 문자열화 / 가상캔버스 삭제
   5 new Image() 새로운이미지 return
3. 미로 만드는 함수 > genMap() , defineStartEnd(), defineMaze()
   1- genMap() => mazeMap = new Array(height) 2차원배열 활용
   mazeMap[y][x] {n,s,e,w : false / visited / priorPos:null}가 담긴 2차원배열 생성

   2- defineMaze() => 방향 셔플 / visited true / 재귀

   3- defineStartEnd() => switch문 rand(4)를 넣었을때 case 0 1 2 3
   startCoord / endCoord 설정 시작지점의 대각선 반대가 끝지점 x는 높이 y는 너비 ???

4. DrawMaze 함수 > map = Maze.map() 선언 > drawMap()2차원배열 > drawCell() 함수
   cellsize??
   drawCell() => cell.(n,s,e,w) false인곳 벽 그리기

5. clear() 함수
6. endSprite가 null의 유무에 따라 drawEndMethod() 실행
7. 승리메시지 함수
8. visablity 함수로 id에 hidden 넣는 함수 생성
9. player 함수 생성 > drawSpriteCircle , drawSpriteImg, removeSprite, check 함수

10. makeMaze() 미로 만드는 함수 생성
