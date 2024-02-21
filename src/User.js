import React from 'react'

const User = ({user}) => {
  return (
    <div className='usercard'>
        <div className='box'>
            <img src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=740&t=st=1708443847~exp=1708444447~hmac=1099bccdd6286a6ccc24ab0adaca5e413f5007b1214e82f98b9c3a155c5faece" alt="user"/>
            <p className='name'>Leanne Graham</p>
            <div className='username'>User Name: Bret</div>
        </div>
        <div class="card">
            <div class="company">
                COMPANY:
                <p>name: "Romaguera-Crona"</p>
                <p>catchPhrase: "Multi-layered client-server neural-net"</p>
                <p>bs: "harness real-time e-markets"</p>
            </div>
            <div class="text">
                <h5 class="title">Email: Sincere@april.biz</h5>
                <h5 class="title">Website: hildegard.org</h5>
                <div class="paragraph color-gray">
                    <p>Adress:</p>
                    <p>street: Kulas Light</p>
                    <p>suite: Apt. 556</p>
                    <p>city: Gwenborough</p>
                    <p>zipcode: 92998-3874</p>
                </div>
                <span class="tag">Geo:</span>
                <span class="tag">lat: -37.3159</span>
                <span class="tag">lng: 81.1496</span>
                <div class="divider">
                    <button className='contact'>Phone: 1-770-736-8031 x56442</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User