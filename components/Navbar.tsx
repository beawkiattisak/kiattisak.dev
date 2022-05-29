import { Component, ReactNode } from "react"
import Moment from "moment"
import { toast } from "react-toastify"
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoSearch } from "react-icons/io5"

const dumbMessage = [
  "Brain.exe has stopped working",
  "Task failed successfully",
  "Kiattisak is sad, please cheer it up",
  "CRITICAL PROCESS DIED",
  "Something happened",
  "Well now i am not doing it!",
  "A problem occured",
  "Game error. Please reboot and restart the game.",
  "The operation completed successfully.",
  "Your mouse has stopped working. Click OK to Continue.",
  "Keyboard not found, Press F1 to Continue",
  "0x0000000001 (Meow)"
]
export default class HotdogComponent extends Component {

  state: Readonly<{
    "headerState": {
      "appState": string
      "appMenu": string[]
    }
    "timeUnit": string
    "timeInterval"?: number
  }> = {
    "headerState": {
      "appState": "Kiattisak",
      "appMenu": [
        "File",
        "Edit",
        "View",
        "Go",
        "Window",
        "Help"
      ],
    },
    "timeUnit": "",
  };

  componentDidMount() {
    this.setState({
      ...this.updateTime(),
      "timeInterval": setInterval(() => this.setState(this.updateTime()), 10000)
    })
  }

  componentWillUnmount() {
    if (this.state.timeInterval) clearInterval(this.state.timeInterval)
  }

  updateTime() {
    return {
      "timeUnit": Moment().format("ddd MMM D h:mm A")
    }
  }

  render(): ReactNode {
    return (
      <>
        <header className="flex items-center justify-between h-10 mb-2 p-2 text-white">
          <div className="inline-flex items-center space-x-1.5">
            <img src="/favicon.ico" width={30} height={24} alt="" />

            <span className="font-bold select-none">
              { this.state.headerState.appState }
            </span>

            <div className="hidden sm:inline-flex items-center space-x-1.5 mt-0.5 pl-2">
              {
                this.state.headerState.appMenu.map((menuInfo, index) => (
                  <span key={index} className="text-sm font-semobold select-none rounded px-1 hover:bg-white hover:text-black" onClick={() => toast.error(dumbMessage[Math.floor(Math.random() * dumbMessage.length)], { "position": toast.POSITION.TOP_CENTER })}>{menuInfo}</span>
                ))
              }
            </div>
          </div>

          <div className="inline-flex items-center justify-around space-x-1.5">
            <button className="text-white hover:text-gray-800 hover:bg-white p-1 rounded" aria-label="Search this website">
              <IoSearch size={18} />
            </button>

            <button className="text-white hover:text-blue-600 hover:bg-white p-1 rounded" onClick={() => window.open("https://www.facebook.com/kiattisakbeawsanburee")} aria-label="Facebook of Kiattisak">
              <IoLogoFacebook size={18} />
            </button>

            <button className="text-white hover:text-indigo-600 hover:bg-white p-1 rounded" onClick={() => window.open("https://github.com/beawy7")} aria-label="Github of Kiattisak">
              <IoLogoGithub size={18} />
            </button>

            <button className="text-white hover:text-blue-700 hover:bg-white p-1 rounded" onClick={() => window.open("https://th.linkedin.com/in/kiattisakbeaw")} aria-label="LinkedIn of Kiattisak">
              <IoLogoLinkedin size={18} />
            </button>

            <span className="select-none hidden text-sm font-semobold sm:block md:text-base">
              { this.state.timeUnit }
            </span>
          </div>
        </header>
      </>
    )
  }
}