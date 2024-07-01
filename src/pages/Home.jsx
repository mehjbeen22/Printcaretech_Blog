import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BuildIcon from "@mui/icons-material/Build";
import ContentSetup from "./ContentSetup";
import Disclaimer from "./Disclaimer";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-woman-drinking-coffee_23-2149628826.jpg?t=st=1716787765~exp=1716791365~hmac=628a358c355b0d265ea8ac720979b83359609b83bdaec8b8b3787909f1c641bd&w=900"
            alt="Woman drinking coffee"
            className="w-full h-96 object-cover animate__animated animate__fadeIn"
          />
          <div className="absolute inset-0 bg-opacity-50 flex justify-center items-center animate__animated animate__fadeIn">
            <div className="text-center text-white animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900">
                Welcome to Printercaretech
              </h1>
              <p className="text-lg md:text-2xl text-blue-900">
                Your trusted partner for all printer solutions
                <br />
                Setup for step by step guidance on how to setup , configure and
                register your printer
              </p>
            </div>
          </div>
        </div>

        {/* ------------ ICONS LIVE CHAT --------------- */}
        <section className="shadow-2xl py-10">
          <p className="text-2xl font-bold text-center mb-8 text-blue-900">
            Instant Support on live chat
          </p>

          <div className="flex justify-center gap-8">
            {/* Contact */}
            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
                <HeadsetMicIcon sx={{ fontSize: "3rem" }} />
              </div>
              <p className="text-lg font-semibold text-blue-900">Contact</p>
            </div>

            {/* Chat */}
            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
                <ChatIcon sx={{ fontSize: "3rem" }} />
              </div>
              <p className="text-lg font-semibold text-blue-900">Chat</p>
            </div>

            {/* Setup & Install */}
            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
                <SettingsSuggestIcon sx={{ fontSize: "3rem" }} />
              </div>
              <p className="text-lg font-semibold text-blue-900">
                Setup & install
              </p>
            </div>

            {/* Diagnose & Fix */}
            <div className="text-center">
              <div className="bg-blue-900 rounded-full w-24 h-24 flex items-center justify-center text-white text-4xl mx-auto mb-4">
                <BuildIcon sx={{ fontSize: "3rem" }} />
              </div>
              <p className="text-lg font-semibold text-blue-900">
                Diagnose & Fix
              </p>
            </div>
          </div>
        </section>
      </div>

      <ContentSetup />
      <Disclaimer />
    </>
  );
};

export default Home;
