// Giả mạo phản hồi để có quyền truy cập YouTube Premium
var premium_entitlement = {
  grace_period_expires_date: null,
  purchase_date: "2024-12-12T00:00:00Z",  // Ngày bắt đầu sử dụng YouTube Premium miễn phí
  product_identifier: "com.youtube.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z" // Đảm bảo quyền truy cập không hết hạn
};

// Kiểm tra trạng thái của phiên, nếu chưa bật thì bật lên
if (!$persistentStore.get("shadowEnabled")) {
  // Lưu trạng thái ShadowRocket đã được bật
  $persistentStore.set("shadowEnabled", true);
}

// Đảm bảo sử dụng Persistent Session để duy trì trạng thái
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
var obj = JSON.parse($response.body);

// Cập nhật entitlements
obj.subscriber.subscriptions["com.youtube.premium.yearly"] = premium_entitlement;
obj.subscriber.entitlements["YouTubePremium"] = premium_entitlement; // Cung cấp quyền truy cập Premium

// Thêm thông điệp cá nhân hóa
obj.subscriber.entitlements["YouTubePremium"].attention = "Chúc mừng bạn Hoàng Văn Bảo! Vui lòng không bán hoặc chia sẻ cho người khác!";

// Trả lại kết quả
$done({ body: JSON.stringify(obj) });