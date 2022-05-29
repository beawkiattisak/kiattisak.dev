import Axios from "axios"
import { motion } from "framer-motion"
import { Component, ReactNode } from "react";

export default class UserProfile extends Component {

    state: Readonly<{
        "url"?: string
    }> = {}

    componentDidMount() {
        Axios.get("https://api.github.com/users/beawy7").then((res) => {
            this.setState({
                "url": res.data.avatar_url
            })
        })
    }

    render(): ReactNode {
        return (
            <div
                className="flex justify-center items-center"
            >
                {
                    this.state.url ? (
                        <motion.img src={this.state.url} className="rounded-full" width={64} height={64} alt="" whileHover={{ scale: 1.36, y: -8 }} whileTap={{ scale: 0.77 }} />
                    ) : (
                        <div className="h-16 w-16 animate-pulse bg-white rounded-full" />
                    )
                }
            </div>
        )
    }
}