import { UText } from "@/components/Lv1_Atoms";
import { TextButton } from "@/components/Lv2_Molecules";
import { $cx } from "@/lib";
import styles from "./SpotlightLeft.module.scss";

const SpotlightLeft = () => {
  const classes = {
    feature: $cx(styles["feature"]),
    container: $cx(styles["feature__container"]),
    textContainer: $cx(styles["feature__container--text-container--title"]),
    desc: $cx(styles["feature__container--text-container--desc"]),
  };

  return (
    <div>
      <div>
        <div>
          <UText
            weight="extrabold"
            color="blue-gray-900"
            className={classes.textContainer}
          >
            All the cool features
          </UText>

          <UText color="blue-gray-900" weight="normal" className={classes.desc}>
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
            ullamcorper non viverra a, neque orci.
          </UText>
        </div>

        <div className="display-flex items-center mt-8">
          <TextButton
            color="blue-600"
            textAlign="center"
            weight="medium"
            size="xl"
          >
            <span className="display-flex items-center gap-x-2">
              View all the features
              <svg
                className="display-inline-block vertical-align-middle"
                width="24"
                height="28"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.586 10.6732L11.636 6.72315C11.4538 6.53455 11.353 6.28195 11.3553 6.01975C11.3576 5.75756 11.4628 5.50674 11.6482 5.32134C11.8336 5.13593 12.0844 5.03076 12.3466 5.02848C12.6088 5.0262 12.8614 5.127 13.05 5.30915L18.707 10.9662C18.8002 11.0588 18.8741 11.169 18.9246 11.2903C18.9751 11.4116 19.001 11.5417 19.001 11.6732C19.001 11.8046 18.9751 11.9347 18.9246 12.056C18.8741 12.1773 18.8002 12.2875 18.707 12.3802L13.05 18.0372C12.9578 18.1327 12.8474 18.2088 12.7254 18.2613C12.6034 18.3137 12.4722 18.3413 12.3394 18.3424C12.2066 18.3436 12.0749 18.3183 11.952 18.268C11.8291 18.2177 11.7175 18.1434 11.6236 18.0495C11.5297 17.9557 11.4555 17.844 11.4052 17.7211C11.3549 17.5982 11.3296 17.4665 11.3307 17.3338C11.3319 17.201 11.3595 17.0698 11.4119 16.9478C11.4643 16.8257 11.5405 16.7154 11.636 16.6232L15.586 12.6732H6C5.73478 12.6732 5.48043 12.5678 5.29289 12.3803C5.10536 12.1927 5 11.9384 5 11.6732C5 11.4079 5.10536 11.1536 5.29289 10.966C5.48043 10.7785 5.73478 10.6732 6 10.6732H15.586Z"
                  fill="#2563EB"
                />
              </svg>
            </span>
          </TextButton>
        </div>
      </div>
    </div>
  );
};

export default SpotlightLeft;
