// Kiểm tra trạng thái phiên, nếu chưa bật thì bật lên
if (!$persistentStore.get("shadowEnabled")) {
  // Lưu trạng thái ShadowRocket đã được bật
  $persistentStore.set("shadowEnabled", true);
}

// Trả lại kết quả
$done({});
