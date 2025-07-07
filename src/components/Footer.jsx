import IconSosmed from "./partials/IconSosmed"
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

export default function Footer(){
    return(
    <footer class="w-full p-4 bg-neutral-700  shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm text-neutral-300 sm:text-center dark:text-gray-400">© 2025 <a href="mailto:qurtubi1411@gmail.com" class="hover:underline">Muhammad Qurtubi™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-3xl font-medium text-neutral-300 dark:text-gray-400 sm:mt-0">
                            <IconSosmed Icon={CiInstagram} link="https://www.instagram.com/qurtubi11/"/>
                            <IconSosmed Icon={CiLinkedin} link="https://www.linkedin.com/in/muhammad-qurtubi-1b9117368/"/>
                            <IconSosmed Icon={MdOutlineMail} link="mailto:qurtubi1411@gmail.com"/>
    </ul>
</footer>
    )
}