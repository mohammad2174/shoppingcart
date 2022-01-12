import React, { Component, Fragment } from "react";
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Navigation from "../components/Navigation";


class ProductsList extends Component {
  state = {
    open : false,
    womantop : '',
    mantop : '',
    dress : '',
    pant : '',
    denim : '',
    sweater : '',
    tshirt : '',
    jacket : '',
    Activewear : '',
    selectedColor : [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    selectedSize : [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
      { name: 'XXXL', inStock: false },
    ],
  }

  setOpen = (womantop,mantop,dress,pant,denim,sweater,tshirt,jacket,Activewear) => {
    this.setState({open : true, womantop : womantop, mantop : mantop, dress : dress, pant : pant, denim : denim, sweater : sweater, tshirt : tshirt, jacket : jacket, Activewear : Activewear})
  }

  setClose = () => {
    this.setState({open : false})
  }

  setSelectedColor = () => {
    this.setState(prevState => ({
      selectedColor : prevState.selectedColor 
    }))
  }

  setSelectedSize = () => {
    this.setState(prevState => ({
      selectedSize : prevState.selectedSize 
    }))
  }
  render() {
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
      const womantops = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1624258012762-6c0fc69cccf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
          price: 25
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjAyMzMxNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
          price: 47
        },
        {
          id: 3,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1618354691714-7d92150909db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
          price: 39
        },
        {
          id: 4,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1618677603544-51162346e165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
          price: 53
        },
      ]
      const mantops = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw5ODU3OTk2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1503340588524-222d094c7066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xkRUdXdnBIRWFwUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
          price: 46
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1626160200758-71b8bf10d34f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wwMTh1N19mdnhBUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw5OTUzMDU5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
          price: 61
        },
        {
          id: 3,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1621844725002-936a3734920a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwwMTh1N19mdnhBUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/blank-white-tshirt-front-with-clipping-path-picture-id482949611?b=1&k=20&m=482949611&s=170667a&w=0&h=oPsmQCKbaB4oiWTmQ2QCj485lb60y47FplQezKpkv-0=',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
          price: 74
        },
        {
          id: 4,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1532374894023-69a0b7159b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MDE4dTdfZnZ4QVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5OTUzMDU5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
          price: 37
        },
      ]
      const dresses = [
           {   
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://media.istockphoto.com/photos/woman-wearing-a-floral-pattern-dress-on-an-autumn-day-in-nature-picture-id1292110906?b=1&k=20&m=1292110906&s=170667a&w=0&h=4zpVYOydO2_d9eu6tYy1QC8e2AiBMJbxmC466Q_mCgo=',
            catimageSrc: 'https://images.unsplash.com/photo-1628705077470-21ff5a207b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGRyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
            price: 101
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            catimageSrc: 'https://images.unsplash.com/photo-1630534591852-25eb98a6aa8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc5fHxkcmVzc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
            price: 75
          },
          {
            id: 3,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            catimageSrc: 'https://images.unsplash.com/photo-1629737166947-7b5b5ad11622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzM0fHxkcmVzc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
            price: 64
          },
          {
            id: 4,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1618214802314-7dff34596edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyZXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            catimageSrc: 'https://media.istockphoto.com/photos/beautiful-womans-dress-lies-on-the-floor-picture-id1296111355?b=1&k=20&m=1296111355&s=170667a&w=0&h=8i8MWIGRyIw9QXZPYHJz2ON0I9HCFOWDmhYd8e_kO-4=',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
            price: 130
          },
      ]
      const pants = [
           {
            id: 1,
            name: 'Full Nelson',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            catimageSrc: 'https://images.unsplash.com/photo-1588544622467-6df9eef29c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxwYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Full Nelson.",
            describtion: 'Shop Now',
            price: 146
          },
          {
            id: 2,
            name: 'Re-Arranged',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            catimageSrc: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            imageAlt: "Re-Arranged.",
            describtion: 'Shop Now',
            price: 153
          },
          {
            id: 3,
            name: 'My Way',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            catimageSrc: 'https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: "My Way.",
            describtion: 'Shop Now',
            price: 192
          },
          {
            id: 4,
            name: 'Counterfeit',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            catimageSrc: 'https://media.istockphoto.com/photos/blue-mens-trousers-picture-id1281807530?b=1&k=20&m=1281807530&s=170667a&w=0&h=4_FEA9unoKVOozJUWxCk6ZBJM6vabX8ZfnHt9n-IZ4c=',
            imageAlt: "Counterfeit.",
            describtion: 'Shop Now',
            price: 164
          },
      ]
      const denims = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/blue-denim-jacket-for-background-close-up-of-the-front-of-a-denim-picture-id1317351339?b=1&k=20&m=1317351339&s=170667a&w=0&h=0WbP8ZS3TrjLji9foKjFsO2rx87zeK1537Gif89HYfY=',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
          price: 240
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1545912656-922de67c0b36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbmltJTIwc2tpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/denim-skirt-isolated-picture-id1162100585?b=1&k=20&m=1162100585&s=170667a&w=0&h=ydqi0U7vYxc3jnmQ_0KUc1QtFjw4_SoNp4Ca_LaMRQo=',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
          price: 263
        },
        {
          id: 3,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1570099424905-94ee2997ae4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbmltJTIwc2hvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/one-short-blue-jeans-isolated-on-white-picture-id695708092?b=1&k=20&m=695708092&s=170667a&w=0&h=L0-lYNMeryKtjAZOGiOWRiYRgGCSOdqjh_gwNmJxfWU=',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
          price: 275
        },
        {
          id: 4,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1535821768496-80f6b2bd573a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRlbmltJTIwamVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1572689535562-3c54a15292d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbmltJTIwamVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
          price: 261
        },
      ]
      const sweaters = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1608984361471-ff566593088f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN3ZWF0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?b=1&k=20&m=1278802435&s=170667a&w=0&h=66zjl1eo9fICf3iuuzUu6xwJJfZPbSfIEp85HEvEbFc=',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
          price: 209
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1610901157620-340856d0a50f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3dlYXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1612797748239-a83ed306dcfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dlYXRlciUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
          price: 260
        },
        {
          id: 3,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1589359425603-dfe010cf3ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN3ZWF0ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/blue-sweater-isolated-on-white-casual-vintage-knitted-sweater-wool-picture-id1340959863?b=1&k=20&m=1340959863&s=170667a&w=0&h=LXJTB6W61wgFCDHq3RAnzdMnugQPHM8XFWx1Q4Ft43I=',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
          price: 275
        },
        {
          id: 4,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1613590373588-e61986b98327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN3ZWF0ZXIlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3dlYXRlciUyMHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
          price: 230
        },
      ]
      const tshirts = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1578021127722-1f1ff95b429e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
          price: 19
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/blank-white-tshirt-front-with-clipping-path-picture-id482949611?b=1&k=20&m=482949611&s=170667a&w=0&h=oPsmQCKbaB4oiWTmQ2QCj485lb60y47FplQezKpkv-0=',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
          price: 24
        },
        {
          id: 3,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1608883823203-0a4dbd29bdaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0JTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w5OTUzMDU5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
          price: 36
        },
        {
          id: 4,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHQlMjBzaGlydCUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1621951753015-740c699ab970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
          price: 21
        },
      ]
      const jackets = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1546771515-3c353a3da013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1489972536996-943907ea1cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxqYWNrZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
          price: 278
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/blank-tracksuit-top-mockup-picture-id1326352310?b=1&k=20&m=1326352310&s=170667a&w=0&h=_i7JGS0z6HToAMNFUKr2XXJVgOlN_qLYxUwucq-MDI4=',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
          price: 245
        },
        {
          id: 3,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/flagged/photo-1554033750-2137b5cfd7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4MzM3ODk0N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
          price: 264
        },
        {
          id: 4,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
          price: 241
        },
      ]
      const Activewears = [
        {
          id: 1,
          name: 'Full Nelson',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTY4MjEyN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/clothes-make-running-picture-id466367844?b=1&k=20&m=466367844&s=170667a&w=0&h=UCZTwrAOn3ffct8Edo7PMfY4RJBDVIkBcs1xey8skYI=',
          imageAlt: "Full Nelson.",
          describtion: 'Shop Now',
          price: 360
        },
        {
          id: 2,
          name: 'Re-Arranged',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1596646912242-80d82d06c463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxOTg0NTczMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/mannequin-at-fashion-store-picture-id155601795?b=1&k=20&m=155601795&s=170667a&w=0&h=5-n5--57wo7sdS6UMtBLD7wNvxkZkCrDwnT0Sz335vI=',
          imageAlt: "Re-Arranged.",
          describtion: 'Shop Now',
          price: 342
        },
        {
          id: 3,
          name: 'My Way',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8NDYwNzE2N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://images.unsplash.com/photo-1595909315417-2edd382a56dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWN0aXZld2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          imageAlt: "My Way.",
          describtion: 'Shop Now',
          price: 299
        },
        {
          id: 4,
          name: 'Counterfeit',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTMxNTk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          catimageSrc: 'https://media.istockphoto.com/photos/flat-lay-with-sportswear-with-sneakers-fitness-tracker-and-sports-picture-id818706894?b=1&k=20&m=818706894&s=170667a&w=0&h=Wa8_cUQmTFRs9RJq1k0nDiY1gLRc6L-N5lcQWa1QlBw=',
          imageAlt: "Counterfeit.",
          describtion: 'Shop Now',
          price: 286
        },
      ]
      const product = {
        name: this.state.womantop.name || this.state.mantop.name || this.state.dress.name || this.state.pant.name || this.state.denim.name || this.state.sweater.name || this.state.tshirt.name || this.state.jacket.name || this.state.Activewear.name,
        price: this.state.womantop.price || this.state.mantop.price || this.state.dress.price || this.state.pant.price || this.state.denim.price || this.state.sweater.price || this.state.tshirt.price || this.state.jacket.price || this.state.Activewear.price,
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        imageSrc: (this.state.womantop.id === 1 || this.state.womantop.id === 2 || this.state.womantop.id === 3 || this.state.womantop.id === 4 ? this.state.womantop.catimageSrc : this.state.womantop.imageSrc) || (this.state.mantop.id === 1 || this.state.mantop.id === 2 || this.state.mantop.id === 3 || this.state.mantop.id === 4 ? this.state.mantop.catimageSrc : this.state.mantop.imageSrc) || (this.state.dress.id === 1 || this.state.dress.id === 2 || this.state.dress.id === 3 || this.state.dress.id === 4 ? this.state.dress.catimageSrc : this.state.dress.imageSrc) || (this.state.pant.id === 1 || this.state.pant.id === 2 || this.state.pant.id === 3 || this.state.pant.id === 4 ? this.state.pant.catimageSrc : this.state.pant.imageSrc) || (this.state.denim.id === 1 || this.state.denim.id === 2 || this.state.denim.id === 3 || this.state.denim.id === 4 ? this.state.denim.catimageSrc : this.state.denim.imageSrc) || (this.state.sweater.id === 1 || this.state.sweater.id === 2 || this.state.sweater.id === 3 || this.state.sweater.id === 4 ? this.state.sweater.catimageSrc : this.state.sweater.imageSrc) || (this.state.tshirt.id === 1 || this.state.tshirt.id === 2 || this.state.tshirt.id === 3 || this.state.tshirt.id === 4 ? this.state.tshirt.catimageSrc : this.state.tshirt.imageSrc) || (this.state.jacket.id === 1 || this.state.jacket.id === 2 || this.state.jacket.id === 3 || this.state.jacket.id === 4 ? this.state.jacket.catimageSrc : this.state.jacket.imageSrc) || (this.state.Activewear.id === 1 || this.state.Activewear.id === 2 || this.state.Activewear.id === 3 || this.state.Activewear.id === 4 ? this.state.Activewear.catimageSrc : this.state.Activewear.imageSrc),
        imageAlt: this.state.womantop.imageAlt || this.state.mantop.imageAlt || this.state.dress.imageAlt || this.state.pant.imageAlt || this.state.denim.imageAlt || this.state.sweater.imageAlt || this.state.tshirt.imageAlt || this.state.jacket.imageAlt || this.state.Activewear.imageAlt,
        colors: this.state.selectedColor,
        sizes: this.state.selectedSize,
      }

    return (
      <>
      <Navigation />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Tops</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {womantops.map((womantop) => (
            <div key={womantop.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={womantop.imageSrc}
                  alt={womantop.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(womantop)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={womantop.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {womantop.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{womantop.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${womantop.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {mantops.map((mantop) => (
            <div key={mantop.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={mantop.imageSrc}
                  alt={mantop.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(mantop)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={mantop.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {mantop.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{mantop.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${mantop.price}</p>
              </div>
            </div>
          ))}
        </div>
       <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Dresses</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {dresses.map((dress) => (
            <div key={dress.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={dress.imageSrc}
                  alt={dress.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(dress)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={dress.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {dress.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{dress.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${dress.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Pants</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {pants.map((pant) => (
            <div key={pant.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={pant.imageSrc}
                  alt={pant.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(pant)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={pant.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {pant.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{pant.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${pant.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Denim</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {denims.map((denim) => (
            <div key={denim.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={denim.imageSrc}
                  alt={denim.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(denim)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={denim.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {denim.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{denim.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${denim.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Sweaters</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sweaters.map((sweater) => (
            <div key={sweater.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={sweater.imageSrc}
                  alt={sweater.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(sweater)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={sweater.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {sweater.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{sweater.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${sweater.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">T-Shirts</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={tshirt.imageSrc}
                  alt={tshirt.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(tshirt)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={tshirt.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {tshirt.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{tshirt.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${tshirt.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Jackets</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {jackets.map((jacket) => (
            <div key={jacket.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={jacket.imageSrc}
                  alt={jacket.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(jacket)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={jacket.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {jacket.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{jacket.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${jacket.price}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900">Activewear</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Activewears.map((Activewear) => (
            <div key={Activewear.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80">
                <img
                  src={Activewear.imageSrc}
                  alt={Activewear.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              <div className="flex items-end p-4">
                <button onClick={() => this.setOpen(Activewear)} class="relative z-10 w-full bg-white bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100">Quick View</button>
                </div>  
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={Activewear.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {Activewear.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{Activewear.describtion}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">${Activewear.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Transition.Root show={this.state.open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={this.setOpen}>
        <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => this.setClose()}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>

                    <section aria-labelledby="information-heading" className="mt-2">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">${product.price}</p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{product.rating} out of 5 stars</p>
                          <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {product.reviewCount} reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-10">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        {/* Colors */}
                        <div>
                          <h4 className="text-sm text-gray-900 font-medium">Color</h4>

                          <RadioGroup value={this.state.selectedColor} onChange={this.setSelectedColor} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {product.colors.map((color) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      active && !checked ? 'ring ring-offset-1' : '',
                                      !active && checked ? 'ring-2' : '',
                                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="p" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Sizes */}
                        <div className="mt-10">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                          </div>

                          <RadioGroup value={this.state.selectedSize} onChange={this.setSelectedSize} className="mt-4">
                            <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4">
                              {product.sizes.map((size) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                      active ? 'ring-2 ring-indigo-500' : '',
                                      'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                                      {size.inStock ? (
                                        <div
                                          className={classNames(
                                            active ? 'border' : 'border-2',
                                            checked ? 'border-indigo-500' : 'border-transparent',
                                            'absolute -inset-px rounded-md pointer-events-none'
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <div
                                          aria-hidden="true"
                                          className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                        >
                                          <svg
                                            className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                          </svg>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <button
                          type="submit"
                          className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Add to bag
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>   
      </>
    )
  }
}

export default ProductsList;
