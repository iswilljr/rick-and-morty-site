export interface CardProps extends Omit<Character, "episode"> {
  episode?: Episode;
}

export default function Card({
  created,
  episode,
  gender,
  id,
  image,
  location,
  name,
  origin,
  species,
  status,
  type,
  url,
}: CardProps) {
  const characterStatus = status.toLowerCase();

  return (
    <article className="flex flex-col w-full sm:flex-row sm:w-[600px] sm:h-[240px] bg-[#3c3e44] rounded-lg shadow-sm m-3">
      <div className="flex-[2] w-full sm:w-[230px]">
        <img
          loading="lazy"
          className="w-full h-[300px] sm:h-full object-center object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex-[3] sm:w-[370px] relative p-3 flex flex-col text-white [&_a]:duration-75 [&_a:hover]:text-primary">
        <div className="flex flex-col flex-1 justify-start">
          <a href={url} rel="noopener noreferrer" target="_blank" className="text-2xl font-extrabold">
            <h2>{name}</h2>
          </a>
          <span className="flex items-center capitalize text-[16px] font-medium">
            <span
              className={`w-2 h-2 mr-2 rounded-full ${
                characterStatus === "alive"
                  ? "bg-status-alive"
                  : characterStatus === "dead"
                  ? "bg-status-dead"
                  : "bg-status-unknown"
              }`}
            />{" "}
            {characterStatus} - {species}
          </span>
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <span className="text-[#9e9e9e] text-[16px] font-medium">Last known location:</span>
          {location.url ? (
            <a className="sm:truncate" href={location.url} rel="noopener noreferrer" target="_blank">
              {location.name}
            </a>
          ) : (
            <span>Unknown</span>
          )}
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <span className="text-[#9e9e9e] text-[16px] font-medium">First seen in:</span>
          {episode ? (
            <a className="sm:truncate" href={episode.url} rel="noopener noreferrer" target="_blank">
              {episode.name}
            </a>
          ) : (
            <span>Unknown</span>
          )}
        </div>
      </div>
    </article>
  );
}
