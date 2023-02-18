

import { Component } from 'react';

import Product from '../components/Product';

import p1 from './../assets/product/bebek.jpg';
import axios from 'axios';
import Maincontent from './Maincontent';
// import p2 from './../assets/product/gulamerah.jpg';
// import p3 from './../assets/product/indomie.jpg';
// import p4 from './../assets/product/well.jpg';
const gambar ="https://source.unsplash.com/collection/928423/350x20";

class Buyproduct extends Component {
    // menampung data dengan mengunakan array kosong
    state = {
        post: [],
        formBlogPost: {
            // ini adalah tempat menyimpan block kontent
            userId: 1,
            id: 1,
            title: '',
            body:''

        },isUpdate : false
    }

    // method untuk mengambil data dari API
    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((res) => {
        // console.log(res.data)
        this.setState({
            post: res.data
        })
      })
    }
    
    // mengambil data dari API yang akan ditampilkan
    componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => {
    //     this.setState({
    //         post: json
    //     })
    //   })

    //   axios.get('http://localhost:3004/posts')
    //   .then((res) => {
    //     // console.log(res.data)
    //     this.setState({
    //         post: res.data
    //     })
    //   })
    // kode diatas diringkas menjadi sebuah method dibawah ini
        this.getPostAPI()    
    }

    // function delete mengambil data berupa ID
    handleRemove = (data) => {        
        
        // menghapus data dengan menyertakan ID dibelakang
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Anda yakin ingin menghapus data?") === true){
            axios.delete(`http://localhost:3004/posts/${data}`).then((res)=> {
            this.getPostAPI()    
        // console.log(res)
        })
        }else{
            
        }
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target)    
        
        //membuat id yang unix dengan menggunakan waktu
        let timestamp = new Date().getTime();
        
        // membuat blogpostnew yang berisikan formblogpost lama
        let formBlogPostNew = {...this.state.formBlogPost}
        // console.log(event.target.name)
        
        // masukkan timestamp yang berisikan waktu random kedalam formblogpost
        formBlogPostNew['id'] = timestamp

        // masukkan event dengan target dan value yang ditulis di form yang kemudian dimasukkan ke formblogpostnew
        formBlogPostNew[event.target.name] = event.target.value  
        
        this.setState({
            // kemudian disini akan merubah
            formBlogPost: formBlogPostNew
        }
        // , () => {
        //     //sehingga perubahan akan diterima disini
        //     console.log('value obj formBlogPost : ', this.state.formBlogPost)
        // }
        )

    }

    handleTambah = () => {
        axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then((res)=> {
        console.log(this.state.formBlogPost)
        alert("Data Berhasil Ditambahkan")

        }, (err) => {
                console.log('error', err)
        })
    }
    
    handleSubmit = () => {
       if(this.state.isUpdate){
        this.putDataToAPI()
        }else{
            this.handleTambah()
            this.getPostAPI()
        }
                 
            
                // console.log(res)
                // setStatus(true);

    }

    hadleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost : data,
            isUpdate:true
        })
        // axios.put(`http://localhost:3004/posts/${data}`, this.state.formBlogPost).then(res => {
        //     console.log(res)
        //     this.getPostAPI()
        // })
    }
    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res => {
            console.log(res)
            this.getPostAPI()
        })
    }
            
     
      
    render(){
        return(
                <div className="container pt-5">
                    <section className="pt-5 pb-5 " id="product">
                    <h2 className="m-auto d-flex justify-content-center text-success">Produk</h2>    
                    <a href="/tambah" className='btn btn-success mx-5'>Tambah Product</a>
                    <div className="container pt-5">
                    <section className="pt-5 pb-5 " id="product">
                    <h2 className="m-auto d-flex justify-content-center text-success">Edit Produk</h2>    
                    <div className='form-add-post'>
                        <a href="/buy"> Kembali </a><br></br>

                        <label htmlFor="title">Title</label><br></br>
                        <input type="text" name='title' placeholder='add title' id='title' value={this.state.formBlogPost.title} onChange={this.handleFormChange} /><br></br>
                        {/* yang dmaksut onChange='' adalah ketika terjadi perubahan di inputnya maka kita melakukan sebuah action tertentu */}
                        <label htmlFor="body">Deskripsi</label><br></br>
                        <textarea type="text" name='body' id='body' value={this.state.formBlogPost.body}  placeholder='isi deskripsi product' cols='30' rows='5' onChange={this.handleFormChange}  /><br></br>
                        <button className='btn-submit' onClick={this.handleSubmit} type='submit'  >Tambah</button>
                    
                    </div>
                    </section>
                </div>
                <div className="bungkus-atas container text-center mt-5">
                    <div className="wrapping row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-2 m-auto d-flex justify-content-center align-content-center">
                        {
                            // berfungsi untuk melooping data yang ada di API
                            this.state.post.map(post => {
                                return <Product data={post} GambarP={gambar+post.id} remove={this.handleRemove} update={this.hadleUpdate} />
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
    }
    
}

export default Buyproduct;