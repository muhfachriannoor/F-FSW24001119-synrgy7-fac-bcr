### Endpoints

| API Endpoint    | Method | Deksripsi                        |
| --------------- | ------ | -------------------------------- |
| `/api/cars`     | GET    | Menampilkan seluruh data mobil   |
| `/api/cars/:id` | GET    | Menampilkan data mobil sesuai ID |
| `/api/cars`     | POST   | Menambahkan data mobil baru      |
| `/api/cars/:id` | PUT    | Mengubah data mobil sesuai ID    |
| `/api/cars/:id` | DELETE | Menghapus data mobil sesuai ID   |

### Example Data

- **Menampilkan seluruh data mobil**

  - **Request**
    Endpoint : `/api/cars`
    Method : `GET`
  - **Response**

  ```json
  {
    "status": true,
    "message": "Success Get All Cars",
    "total": 3,
    "data": {
      "cars": [
        {
          "id": 1,
          "name": "Mobil 1",
          "price": 700,
          "size": "Small",
          "image": "https://res.cloudinary.com/dpavtrweo/image/upload/v1715801964/challenge5/hoqqtv26r8qgv46jexlm.jpg",
          "start_rent": "2024-05-16T12:22:09.482Z",
          "finish_rent": "2024-05-16T12:22:09.482Z",
          "created_at": "2024-05-16T12:22:09.482Z",
          "updated_at": null
        },
        {
          "id": 2,
          "name": "Mobil 2",
          "price": 500,
          "size": "Medium",
          "image": "https://res.cloudinary.com/dpavtrweo/image/upload/v1715801963/challenge5/wjkgvj4akcrenh1mmwec.jpg",
          "start_rent": "2024-05-16T12:22:09.482Z",
          "finish_rent": "2024-05-16T12:22:09.482Z",
          "created_at": "2024-05-16T12:22:09.482Z",
          "updated_at": null
        },
        {
          "id": 3,
          "name": "Mobil 3",
          "price": 900,
          "size": "Large",
          "image": "https://res.cloudinary.com/dpavtrweo/image/upload/v1715801963/challenge5/ifpfouew8d4wlv8zm3in.jpg",
          "start_rent": "2024-05-16T12:22:09.482Z",
          "finish_rent": "2024-05-16T12:22:09.482Z",
          "created_at": "2024-05-16T12:22:09.482Z",
          "updated_at": null
        }
      ]
    }
  }
  ```

- **Menampilkan data mobil sesuai ID**
  - **Request**
    Endpoint : `/api/cars/1`
    Method : `GET`
  - **Response**
  ```json
  {
    "status": true,
    "message": "Success Get All Cars",
    "total": 3,
    "data": {
      "cars": [
        {
          "id": 1,
          "name": "Mobil 1",
          "price": 700,
          "size": "Small",
          "image": "https://res.cloudinary.com/dpavtrweo/image/upload/v1715801964/challenge5/hoqqtv26r8qgv46jexlm.jpg",
          "start_rent": "2024-05-16T12:22:09.482Z",
          "finish_rent": "2024-05-16T12:22:09.482Z",
          "created_at": "2024-05-16T12:22:09.482Z",
          "updated_at": null
        }
      ]
    }
  }
  ```
