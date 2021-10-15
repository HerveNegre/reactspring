import React, { useState } from 'react'
import "./Scroll.css"
import { Waypoint } from "react-waypoint"
import { useSpring, animated } from "react-spring"

export default function Scroll() {
    
    const [toggleTxt, setToggleTxt] = useState(false);
    const [toggleTxt2, setToggleTxt2] = useState(false);

    const scrollAnim = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
    })

    const scrollAnim2 = useSpring({
        opacity: toggleTxt2 ? 1 : 0,
        transform: toggleTxt2 ? "translateY(0)" : "translateY(50%)",
    })

    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores
                cum quaerat dolor a consequatur culpa tempora.
                Ipsa dicta temporibus iusto alias, corrupti odit,
                necessitatibus, porro ratione magnam laboriosam reiciendis
                officia deleniti eos minima cumque illo fuga exercitationem
                impedit sed est at a? Laborum explicabo nostrum nulla vitae vel.
                Voluptate, eum veniam iusto, nobis maiores natus,
                quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis.
                Repellendus quia consequuntur culpa ut corporis distinctio voluptas
                unde amet eveniet maxime modi optio numquam officia veniam blanditiis
                ducimus consequatur iure soluta dignissimos commodi natus
                molestiae provident, expedita architecto.
                Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam.
                Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus.
                Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus.
                Minus unde tenetur nobis.
                Magni dolorum necessitatibus officiis voluptatibus aut,
                optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis
                nisi officia illo autem iure repellat vel rerum ea neque fugiat.
                Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora,
                officia, blanditiis architecto. Sit natus a aut earum.
                Cumque consequuntur accusantium, incidunt rerum itaque enim harum,
                quasi non, quibusdam tempore quis atque doloribus a illum molestiae!
                Labore, expedita ad!
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores
                cum quaerat dolor a consequatur culpa tempora.
                Ipsa dicta temporibus iusto alias, corrupti odit,
                necessitatibus, porro ratione magnam laboriosam reiciendis
                officia deleniti eos minima cumque illo fuga exercitationem
                impedit sed est at a? Laborum explicabo nostrum nulla vitae vel.
                Voluptate, eum veniam iusto, nobis maiores natus,
                quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis.
                Repellendus quia consequuntur culpa ut corporis distinctio voluptas
                unde amet eveniet maxime modi optio numquam officia veniam blanditiis
                ducimus consequatur iure soluta dignissimos commodi natus
                molestiae provident, expedita architecto.
                Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam.
                Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus.
                Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus.
                Minus unde tenetur nobis.
                Magni dolorum necessitatibus officiis voluptatibus aut,
                optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis
                nisi officia illo autem iure repellat vel rerum ea neque fugiat.
                Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora,
                officia, blanditiis architecto. Sit natus a aut earum.
                Cumque consequuntur accusantium, incidunt rerum itaque enim harum,
                quasi non, quibusdam tempore quis atque doloribus a illum molestiae!
                Labore, expedita ad!
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores
                cum quaerat dolor a consequatur culpa tempora.
                Ipsa dicta temporibus iusto alias, corrupti odit,
                necessitatibus, porro ratione magnam laboriosam reiciendis
                officia deleniti eos minima cumque illo fuga exercitationem
                impedit sed est at a? Laborum explicabo nostrum nulla vitae vel.
                Voluptate, eum veniam iusto, nobis maiores natus,
                quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis.
                Repellendus quia consequuntur culpa ut corporis distinctio voluptas
                unde amet eveniet maxime modi optio numquam officia veniam blanditiis
                ducimus consequatur iure soluta dignissimos commodi natus
                molestiae provident, expedita architecto.
                Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam.
                Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus.
                Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus.
                Minus unde tenetur nobis.
                Magni dolorum necessitatibus officiis voluptatibus aut,
                optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis
                nisi officia illo autem iure repellat vel rerum ea neque fugiat.
                Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora,
                officia, blanditiis architecto. Sit natus a aut earum.
                Cumque consequuntur accusantium, incidunt rerum itaque enim harum,
                quasi non, quibusdam tempore quis atque doloribus a illum molestiae!
                Labore, expedita ad!
            </p>
            <Waypoint
                bottomOffset="30%"
                onEnter={() => {
                    if(!toggleTxt) {
                        setToggleTxt(true);
                    }
                }}
            />
            <animated.div style={scrollAnim} className="animSection">
                <h2>Profitez de la promo !</h2>
                <form>
                    <label htmlFor="email"></label>
                    <input type="email" id="email" placeholder="Votre adresse email"/>
                </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores
                cum quaerat dolor a consequatur culpa tempora.
                Ipsa dicta temporibus iusto alias, corrupti odit,
                necessitatibus, porro ratione magnam laboriosam reiciendis
                officia deleniti eos minima cumque illo fuga exercitationem
                impedit sed est at a? Laborum explicabo nostrum nulla vitae vel.
                Voluptate, eum veniam iusto, nobis maiores natus,
                quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis.
                Repellendus quia consequuntur culpa ut corporis distinctio voluptas
                unde amet eveniet maxime modi optio numquam officia veniam blanditiis
                ducimus consequatur iure soluta dignissimos commodi natus
                molestiae provident, expedita architecto.
                Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam.
                Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus.
                Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus.
                Minus unde tenetur nobis.
                Magni dolorum necessitatibus officiis voluptatibus aut,
                optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis
                nisi officia illo autem iure repellat vel rerum ea neque fugiat.
                Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora,
                officia, blanditiis architecto. Sit natus a aut earum.
                Cumque consequuntur accusantium, incidunt rerum itaque enim harum,
                quasi non, quibusdam tempore quis atque doloribus a illum molestiae!
                Labore, expedita ad!
            </p>
            <Waypoint
                bottomOffset="40%"
                onEnter={() => {
                    if(!toggleTxt2) {
                        setToggleTxt2(true);
                    }
                }}
            />     
            <animated.p style={scrollAnim2} className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores
                cum quaerat dolor a consequatur culpa tempora.
                Ipsa dicta temporibus iusto alias, corrupti odit,
                necessitatibus, porro ratione magnam laboriosam reiciendis
                officia deleniti eos minima cumque illo fuga exercitationem
                impedit sed est at a? Laborum explicabo nostrum nulla vitae vel.
                Voluptate, eum veniam iusto, nobis maiores natus,
                quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis.
                Repellendus quia consequuntur culpa ut corporis distinctio voluptas
                unde amet eveniet maxime modi optio numquam officia veniam blanditiis
                ducimus consequatur iure soluta dignissimos commodi natus
                molestiae provident, expedita architecto.
                Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam.
                Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus.
                Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus.
                Minus unde tenetur nobis.
                Magni dolorum necessitatibus officiis voluptatibus aut,
                optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis
                nisi officia illo autem iure repellat vel rerum ea neque fugiat.
                Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora,
                officia, blanditiis architecto. Sit natus a aut earum.
                Cumque consequuntur accusantium, incidunt rerum itaque enim harum,
                quasi non, quibusdam tempore quis atque doloribus a illum molestiae!
                Labore, expedita ad!
            <p className="scroll-txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, quidem excepturi fuga, ducimus veniam nesciunt maiores
                cum quaerat dolor a consequatur culpa tempora.
                Ipsa dicta temporibus iusto alias, corrupti odit,
                necessitatibus, porro ratione magnam laboriosam reiciendis
                officia deleniti eos minima cumque illo fuga exercitationem
                impedit sed est at a? Laborum explicabo nostrum nulla vitae vel.
                Voluptate, eum veniam iusto, nobis maiores natus,
                quaerat consectetur sunt eveniet culpa hic consequuntur dolore quis.
                Repellendus quia consequuntur culpa ut corporis distinctio voluptas
                unde amet eveniet maxime modi optio numquam officia veniam blanditiis
                ducimus consequatur iure soluta dignissimos commodi natus
                molestiae provident, expedita architecto.
                Laboriosam obcaecati eligendi nisi a maxime repellendus ipsam.
                Cupiditate quam corrupti suscipit sapiente, doloribus qui incidunt aperiam ducimus.
                Numquam nam expedita dolore illum molestiae at impedit modi nesciunt placeat ducimus.
                Minus unde tenetur nobis.
                Magni dolorum necessitatibus officiis voluptatibus aut,
                optio doloremque itaque culpa deserunt assumenda animi ipsum reiciendis
                nisi officia illo autem iure repellat vel rerum ea neque fugiat.
                Illo iusto sed quidem fuga, provident eaque voluptates ad in tempora,
                officia, blanditiis architecto. Sit natus a aut earum.
                Cumque consequuntur accusantium, incidunt rerum itaque enim harum,
                quasi non, quibusdam tempore quis atque doloribus a illum molestiae!
                Labore, expedita ad!
            </p>
            </animated.p>
        </div>
    )
}
