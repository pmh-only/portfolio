import React from 'react'

import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  project: number
}

export default function ProjectDescripts ({ project }: Props) {
  return [
    <div key={0}>
      <embed src="https://chungraon.com" className="w-full shadow h-80"/>
      <div className="lg:flex mt-4 gap-5 items-start">
        <img src="/portfolio/projects/cheongraon.gif" className="w-full shadow max-w-md" />
        <div className="p-5 break-words lg:w-1/2 bg-yellow-100 shadow">
          <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">청라온 CMS</h2>
          <p>유니엄 산하의 청소년 신문사 청라온을 위한 기자&기사 관리 시스템을 개발하였습니다.</p>
          <br />
          <p>기사 보기, 기사 작성, 기사 삭제, 기사 예약 (엠바고) 등 신문사의 니즈의 맟춘 최신 기능을 제공합니다.</p>
          <br />
          <p>또한 편집자 권한 부여를 통해 기사 승인과 기사 편집, 기자 관리 등 많은 기능을 포함하고 있습니다.</p>
          <br />
          <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://chungraon.com">https://chungraon.com</a></p>
        </div>
      </div>
    </div>,
    <div key={1}>
      <div className="lg:flex mb-4 gap-5 items-start">
        <img src="/portfolio/projects/blockchain.gif" className="w-full shadow max-w-md" />
        <div className="p-5 break-words lg:w-1/2 bg-yellow-100 shadow">
          <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">BlobBlocks</h2>
          <p>2진수 바이너리 정보를 안전하고 신용 가능하게 통신 시킬 수 있는 블럭체인 네트워크를 개발하였습니다.</p>
          <br />
          <p>노드의 대한 정보를 블럭체인 안에 저장 할 수 있어 빠르게 다른 노드와 연결될 수 있습니다.</p>
          <br />
          <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/pmh-only/blockchain">https://github.com/pmh-only/blockchain</a></p>
        </div>
      </div>
    </div>,
    <div key={2}>
      <div className="lg:flex mb-4 gap-5 items-start">
        <img src="/portfolio/projects/handyedu.png" className="w-full shadow max-w-md" />
        <div className="p-5 break-word lg:w-1/2 bg-yellow-100 shadow">
          <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">HandyEdu</h2>
          <p>지루했던 정보보안 수업을 키보드, 마우스로 움직여보고 연결해보며 배울 수 있도록 설계된 교육 플랫폼입니다.</p>
          <br />
          <p>해당 플랫폼을 통해 비밀번호 저장에 적용된 보안 요소들을 쉽고 재미있게 배울 수 있습니다.</p>
          <br />
          <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/pmh-only/new.pmh.codes">https://github.com/pmh-only/new.pmh.codes</a></p>
        </div>
      </div>
    </div>,
    <div key={3}>
      <img src="/portfolio/projects/gohttpfs.gif" className="w-full shadow mb-5" />
      <div className="flex mb-4 gap-5 items-start">
        <div className="p-5 break-words lg:w-1/2 bg-yellow-100 shadow">
          <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">Gohttpfs</h2>
          <p>정적 파일 호스팅을 위한 시스템입니다.</p>
          <br />
          <p>전용 클라이언트를 통해 쉽게 탐색이 가능하고 Go언어의 특성을 살려 빠른 파일 서빙 및 리스팅이 가능합니다.</p>
          <br />
          <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://static.pmh.codes">https://static.pmh.codes</a></p>
          <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/pmh-only/gohttpfs">https://github.com/pmh-only/gohttpfs</a></p>
          <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/pmh-only/gohttpfs-client">https://github.com/pmh-only/gohttpfs-client</a></p>
        </div>
      </div>
    </div>,
    <div key={4}>
      <div className="lg:flex mb-4 gap-5 items-start">
        <img src="/portfolio/projects/outgo2.gif" className="shadow mb-5" />
        <div>
          <div className="p-5 mb-5 break-words w-full bg-yellow-100 shadow">
            <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">Outgo</h2>
            <p>정심관(기숙사) 잔류 인원 확인 및 출사 관리 시스템입니다.</p>
            <br />
            <p>학생은 웹 페이지 및 PWA를 통해 출사 요청 및 출사 설문, 요청 취소를 할 수 있습니다.</p>
            <br />
            <p>구글 스프레드시트와의 연동을 통해 관리자가 시각적으로 편하게 인원을 파악하고 관리 할 수 있습니다.</p>
            <br />
            <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/GBSWHS/Jongsimgwan-outgo">https://github.com/GBSWHS/Jongsimgwan-outgo</a></p>
          </div>
          <img src="/portfolio/projects/outgo3.png" className="shadow mb-5" />
        </div>
      </div>
    </div>,
    <div key={5}>
      <div className="lg:flex mb-4 gap-5 items-start">
        <img src="/portfolio/projects/scs.gif" className="w-full shadow max-w-md" />
        <div className="p-5 break-words lg:w-1/2 bg-yellow-100 shadow">
          <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">School Computer Security</h2>
          <p>학급 내 정보화기기 관리 시스템입니다.</p>
          <br />
          <p>해당 시스템을 통해 선생님들이 교실에 있는 정보화기기를 원격 제어하고 종료 및 스크린샷 생성 등 많은 작업을 할 수 있습니다.</p>
          <br />
          <p>또한 메시지를 전송하거나 파일을 전송할 수 있어 다음 교시를 준비하거나 교실과 교무실 사이 소통이 가능합니다.</p>
          <br />
          <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/SoftWareAndGuider/SchoolComputerSecurity">https://github.com/SoftWareAndGuider/SchoolComputerSecurity</a></p>
        </div>
      </div>
    </div>,
    <div key={6}>
      <div className="lg:flex mb-4 gap-5 items-start">
        <div className="w-full">
          <img src="/portfolio/projects/covidcheck.gif" className="w-full shadow mb-5" />
          <div className="p-5 w-full bg-green-100 shadow">
            <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://m.blog.naver.com/2mcool/222017812341">장곡중, 학생 소프트웨어 동아리가 만든 &quot;발열 검사 확인 시스템&quot; 운영</a></p>
            <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://www.yna.co.kr/view/AKR20200528155800053">중학교 동아리 학생들이 발열검사 관리 프로그램 개발</a></p>
            <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="http://www.gitnews.net/default/index_view_page.php?part_idx=213&idx=52200">칠곡 장곡중학교, &apos;발열 검사 확인 시스템&apos; 개발한 소프트웨어 동아리 학생들 장학금 수여 </a></p>
          </div>
        </div>
        <div>
          <div className="p-5 break-words w-full bg-yellow-100 shadow">
            <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">Covid Check</h2>
            <p>학교를 위한 발열 체크 기록 및 전산 시스템입니다.</p>
            <br />
            <p>해당 시스템을 통해 쉽고 빠르고 안전하게 많은 인원을 발열 확인할 수 있습니다.</p>
            <br />
            <p>또한 직관적인 UI를 통해 관리자가 편리하게 발열 체크 현황을 확인할 수 있어 활용도가 높습니다.</p>
            <br />
            <p>타 학교에서도 도입을 검토하거나 방송 취재 요청 등 많은 관심이 있었습니다.</p>
            <br />
            <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/SoftWareAndGuider/SchoolComputerSecurity">https://github.com/SoftWareAndGuider/SchoolComputerSecurity</a></p>
          </div>
          <embed src='https://streaming.hcn.co.kr/vod_fiveplayer.php?serial=17904' className="w-full mt-5 h-64"/>
        </div>
      </div>
    </div>,
    <div key={7}>
      <div className="lg:flex mb-4 gap-5 items-start">
        <div>
          <div className="p-5 break-words w-full bg-yellow-100 shadow mb-5">
            <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">LofiGirl</h2>
            <p>디스코드 채팅 플랫폼을 통한 24시간 음악 스트리밍 서비스입니다.</p>
            <br />
            <p>음악을 재생할때마다 명령어를 일일히 입력해야 하는 기존 봇 사용 방식을 버리고 새로운 방식을 채택하였습니다.</p>
            <br />
            <p>사용자의 음성 채널 들어옴과 나감 이벤트를 인식히여 미리 지정된 음악을 24시간 재생하도록 하였습니다.</p>
            <br />
            <p>스터디 그룹이나 잔잔한 브금이 필요한 서버에 널리 사용되고 있습니다.</p>
            <br />
            <div className="break-all">
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://lofi.pmh.codes">https://lofi.pmh.codes</a></p>
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://koreanbots.dev/bots/763033945767280650">https://koreanbots.dev/bots/763033945767280650</a></p>
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/lofi-with-discord/LofiGirl3-playserver">https://github.com/lofi-with-discord/LofiGirl3-playserver</a></p>
            </div>
          </div>
          <img src="/portfolio/projects/lofigirl3.gif" className="w-full shadow mb-5" />
        </div>
        <div>
          <img src="/portfolio/projects/lofigirl.gif" className="w-full shadow mb-5" />
          <img src="/portfolio/projects/lofigirl2.gif" className="w-full shadow mb-5" />
        </div>
      </div>
    </div>,
    <div key={8}>
      <video src="/portfolio/projects/coffeemachine.mp4" autoPlay controls className="w-full shadow mb-5" />
      <div className="flex mb-4 gap-5 items-start">
        <div>
          <div className="p-5 break-words w-full bg-yellow-100 shadow mb-5">
            <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">Coffee Machine</h2>
            <p>웹 대시보드를 통해 쉽게 사용가능한 디스코드 음악 스트리밍 서비스입니다.</p>
            <br />
            <p>서버, 채널을 선택하고 유튜브 영상을 검색하거나 입력하면 바로 해당 채널에 재생됩니다.</p>
            <br />
            <p>직관적인 웹 대시보드를 통해 명령어 시스템을 모르는 사용자도 사용할 수 있습니다.</p>
            <br />
            <div className="break-all">
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://coffee.pmh.codes">https://coffee.pmh.codes</a></p>
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/lofi-with-discord/coffee-machine">https://github.com/lofi-with-discord/coffee-machine</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div key={9}>
      <div className="lg:flex mb-4 gap-5 items-start">
        <img src="/portfolio/projects/unityLearn.gif" className="w-full shadow mb-5" />
        <div>
          <div className="p-5 break-words w-full bg-yellow-100 shadow mb-5">
            <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">Cube jump</h2>
            <p>3D 원근감을 이용해가며 주어진 스테이지를 깨는 유니티 기반 게임입니다.</p>
            <br />
            <p>기존 항아리류 게임들이 전, 후진, 점프만 있는 등 2D의 한계를 가지고 있어 제작하였습니다.</p>
            <br />
            <p>역겨운 시야 고정 및 알 수 없는 원근감을 통해 플레이어에게 분노조절이란 어떤것인지 가르쳐 줍니다.</p>
            <br />
            <div className="break-all">
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://static.pmh.codes/UnityLearn/build-20201120/index.html">https://static.pmh.codes/UnityLearn/build-20201120/index.html</a></p>
            </div>
          </div>
        </div>
      </div>
      <embed src="https://static.pmh.codes/UnityLearn/build-20201120/index.html" className="hidden lg:block w-full h-80 overflow-hidden shadow" />
    </div>,
    <div key={10}>
      <embed src="https://auth.gbsw.hs.kr/docs/external" className="w-full h-96 overflow-hidden shadow mb-5" />
      <div className="lg:flex mb-4 gap-5 items-start">
        <div>
          <div className="p-5 break-words w-full bg-yellow-100 shadow mb-5">
            <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">GBSW OAuth2</h2>
            <p>OAuth2 표준을 준수한 학생 통합 로그인 시스템입니다.</p>
            <br />
            <p>학생들이 교내 서비스들에 계정 시스템을 따로따로 만들어 계정 관리가 힘들어지자 통합 로그인 시스템이 필요하다고 느껴 제작되었습니다.</p>
            <br />
            <p>여러 보안 알고리즘을 통해 학생들의 개인정보를 안전하게 저장합니다.</p>
            <br />
            <div className="break-all">
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://auth.pmh.codes">https://auth.pmh.codes</a></p>
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://auth.pmh.codes/dash">https://auth.pmh.codes/dash</a></p>
            </div>
          </div>
        </div>
        <img src="/portfolio/projects/oauth2-3.png" className="shadow w-full p-5" />
      </div>
    </div>,
    <div key={11}>
      <video muted autoPlay src="https://github.com/GBSWHS/1st-hackathon-todaystudy/raw/main/docs/3%EC%A1%B0-%EB%B0%94%EC%9D%B4%ED%8A%B8-%EC%98%81%EC%83%81%EC%8B%9C%EC%97%B0.mp4" className="overflow-hidden shadow mb-5 w-full" controls />
      <div className="flex mb-4 gap-5 items-start">
        <div>
          <div className="p-5 break-words w-full bg-yellow-100 shadow mb-5">
            <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">Today Study</h2>
            <p>아침 자습 시간을 더욱 효율적으로 만들어주는 시스템, 투데이 스터디입니다.</p>
            <br />
            <p>아침시간을 낭비하는 학생들을 위해 아침에 해야 할일을 제시하고 학생간의 질문과 응답을 통해 자기주도적 학습 능력을 키울 수 있도록 설계되었습니다.</p>
            <br />
            <div className="break-all">
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/GBSWHS/1st-hackathon-todaystudy">https://github.com/GBSWHS/1st-hackathon-todaystudy</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div key={12}>
      <img src="/portfolio/projects/dimigo-excel.gif" className="overflow-hidden shadow mb-5 w-full" />
      <div className="flex mb-4 gap-5 items-start">
        <div>
          <div className="p-5 break-words w-full bg-yellow-100 shadow mb-5">
            <h2 className="border-b inline-block text-xl font-bold px-3 mb-3">@dimigo/excel</h2>
            <p>간단한 엑셀 xlsx 파일 파서입니다.</p>
            <br />
            <p>짧은 코드 몇줄로 대용량의 엑셀 파일을 파싱할 수 있습니다.</p>
            <br />
            <div className="break-all">
              <p><FontAwesomeIcon icon={faLink} /> <a className="underline hover:text-blue-500" href="https://github.com/pmh-only/dimigo-excel/">https://github.com/Muzihuzi/dimigo-excel/</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ][project] || <></>
}
