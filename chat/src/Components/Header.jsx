import React from 'react'
import { BsPhone } from "react-icons/bs";

const Header = () => {
    return (
        <div class="home-container">
        <div class="home-flex">
            <div class="left-home">
                <img class="img-responsive-home" src="https://i.pinimg.com/564x/c0/af/eb/c0afeb7236483fc43e550d6a3d425e52.jpg" alt="https://i.pinimg.com/originals/17/90/22/179022af1a862a837d91d7f805327149.jpg"></img>
            </div>
            <div class="right-home">
                <h3 class="home-title">What We Provide at Andrew's Chat-App</h3>
                <hr class="home-line"></hr>
                <p class="home-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus similique, ullam provident
                    dolorem doloribus laboriosam voluptatem dignissimos a eveniet? Nisi, ad. Tenetur quis provident temporibus eos
                    minima repudiandae. Deleniti, dicta laudantium, numquam rem nam enim autem accusantium similique neque repellat fuga
                    sit dolorem doloremque veniam.</p>
                <div class="home-img-flex">
                    <img class="img-home" src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook"></img>
                    <img class="img-home" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram"></img>
                    <img class="img-home" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter"></img>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header
