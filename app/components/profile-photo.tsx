import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="profile-photo">
      <Image
        src="/profile-photo.jpg"
        alt="Portrait of Amir Aunyasopon"
        width={1024}
        height={768}
        className="profile-photo__image"
        sizes="(max-width: 768px) 100vw, 45vw"
      />
    </div>
  );
}
