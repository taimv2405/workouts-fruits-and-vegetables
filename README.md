# Workouts, Fruits and Vegetables

IE307 - Lab 01, Bài 2: hiển thị danh sách bài tập bằng `FlatList` và danh sách trái cây/rau củ bằng `SectionList`. Người dùng chọn hoặc bỏ chọn từng mục, các mục đã chọn hiển thị ở cuối màn hình.

## Chạy ứng dụng

```bash
npm install
npx expo start
```

## Kiểm tra

```bash
npm run typecheck
npm run lint
npm run format:check
```

## Cấu trúc

- `src/app/index.tsx`: màn hình chính, giữ state các mục đã chọn.
- `src/components/`: `ListSection`, `SectionHeader`, `SelectableRow`, `SelectedSummary`, `ItemSeparator`.
- `src/data/`: dữ liệu bài tập và trái cây/rau củ.
- `assets/images/backgrounds/`: ảnh nền của hai danh sách.

## Nguồn ảnh

Ảnh nền lấy từ Pexels, dùng theo [Pexels License](https://www.pexels.com/license/):

- [Grayscale photo of dumbbells on the floor](https://www.pexels.com/photo/grayscale-photo-of-dumbbells-on-the-floor-7209145/)
- [Fresh fruits and vegetables on the table](https://www.pexels.com/photo/fresh-fruits-and-vegetables-on-the-table-6806936/)
