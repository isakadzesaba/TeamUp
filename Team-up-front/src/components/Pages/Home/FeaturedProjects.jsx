import classes from "../../../modules/FeaturedProjects.module.scss"
import clientProfile from "../../../assets/Home-page-pics/profile-pic.jpg"
import exampleProject from "../../../assets/Home-page-pics/exampleProject.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedProjects = () => {
    return (
        <>
            <center><h1 className={classes["featured-projects-title"]}>Featured Projects</h1></center>
            <br/><br/>

            <div className={classes['projects-container']}>
                <div className={classes['desktop-view']}>
                    <div className={classes['projects-side']}>
                        <div className={classes['projects']}>
                            <img className={classes["project-picture"]} src={exampleProject}/>
                            <div className={classes["project-description"]}>
                                <h4>Project Name</h4>
                                <p>
                                    description:
                                    it will be best site
                                    ever for clien and
                                    developers easy money
                                    baby.
                                </p>
                                <br/>
                                <div className={classes["client-side"]}>
                                    <div>
                                        <img className={classes["client-profile"]} src={clientProfile}/>
                                        <p>Client Name</p>
                                    </div>
                                    <h5>$1,000</h5>
                                </div>
                            </div>
                        </div>

                        <div className={classes['projects']}>
                            <img className={classes["project-picture"]} src={exampleProject}/>
                            <div className={classes["project-description"]}>
                                <h4>Project Name</h4>
                                <p>
                                    description:
                                    it will be best site
                                    ever for clien and
                                    developers easy money
                                    baby.
                                </p>
                                <br/>
                                <div className={classes["client-side"]}>
                                    <div>
                                        <img className={classes["client-profile"]} src={clientProfile}/>
                                        <p>Client Name</p>
                                    </div>
                                    <h5>$1,000</h5>
                                </div>
                            </div>
                        </div>

                        <div className={classes['projects']}>
                            <img className={classes["project-picture"]} src={exampleProject}/>
                            <div className={classes["project-description"]}>
                                <h4>Project Name</h4>
                                <p>
                                    description:
                                    it will be best site
                                    ever for clien and
                                    developers easy money
                                    baby.
                                </p>
                                <br/>
                                <div className={classes["client-side"]}>
                                    <div>
                                        <img className={classes["client-profile"]} src={clientProfile}/>
                                        <p>Client Name</p>
                                    </div>
                                    <h5>$1,000</h5>
                                </div>
                            </div>
                        </div>

                        <div className={classes['projects']}>
                            <img className={classes["project-picture"]} src={exampleProject}/>
                            <div className={classes["project-description"]}>
                                <h4>Project Name</h4>
                                <p>
                                    description:
                                    it will be best site
                                    ever for clien and
                                    developers easy money
                                    baby.
                                </p>
                                <br/>
                                <div className={classes["client-side"]}>
                                    <div>
                                        <img className={classes["client-profile"]} src={clientProfile}/>
                                        <p>Client Name</p>
                                    </div>
                                    <h5>$1,000</h5>
                                </div>
                            </div>
                        </div>

                        <div className={classes['projects']}>
                            <img className={classes["project-picture"]} src={exampleProject}/>
                            <div className={classes["project-description"]}>
                                <h4>Project Name</h4>
                                <p>
                                    description:
                                    it will be best site
                                    ever for clien and
                                    developers easy money
                                    baby.
                                </p>
                                <br/>
                                <div className={classes["client-side"]}>
                                    <div>
                                        <img className={classes["client-profile"]} src={clientProfile}/>
                                        <p>Client Name</p>
                                    </div>
                                    <h5>$1,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes['mobile-view']}>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView="auto"
                        navigation
                        pagination={{ clickable: true }}
                        className={classes['swiper-container']}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                    >
                        <SwiperSlide className={classes['swiper-slide']}>
                            <div className={classes['projects']}>
                                <img className={classes["project-picture"]} src={exampleProject}/>
                                <div className={classes["project-description"]}>
                                    <h4>Project Name</h4>
                                    <p>
                                        description:
                                        it will be best site
                                        ever for clien and
                                        developers easy money
                                        baby.
                                    </p>
                                    <br/>
                                    <div className={classes["client-side"]}>
                                        <div>
                                            <img className={classes["client-profile"]} src={clientProfile}/>
                                            <p>Client Name</p>
                                        </div>
                                        <h5>$1,000</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={classes['swiper-slide']}>
                            <div className={classes['projects']}>
                                <img className={classes["project-picture"]} src={exampleProject}/>
                                <div className={classes["project-description"]}>
                                    <h4>Project Name</h4>
                                    <p>
                                        description:
                                        it will be best site
                                        ever for clien and
                                        developers easy money
                                        baby.
                                    </p>
                                    <br/>
                                    <div className={classes["client-side"]}>
                                        <div>
                                            <img className={classes["client-profile"]} src={clientProfile}/>
                                            <p>Client Name</p>
                                        </div>
                                        <h5>$1,000</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={classes['swiper-slide']}>
                            <div className={classes['projects']}>
                                <img className={classes["project-picture"]} src={exampleProject}/>
                                <div className={classes["project-description"]}>
                                    <h4>Project Name</h4>
                                    <p>
                                        description:
                                        it will be best site
                                        ever for clien and
                                        developers easy money
                                        baby.
                                    </p>
                                    <br/>
                                    <div className={classes["client-side"]}>
                                        <div>
                                            <img className={classes["client-profile"]} src={clientProfile}/>
                                            <p>Client Name</p>
                                        </div>
                                        <h5>$1,000</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={classes['swiper-slide']}>
                            <div className={classes['projects']}>
                                <img className={classes["project-picture"]} src={exampleProject}/>
                                <div className={classes["project-description"]}>
                                    <h4>Project Name</h4>
                                    <p>
                                        description:
                                        it will be best site
                                        ever for clien and
                                        developers easy money
                                        baby.
                                    </p>
                                    <br/>
                                    <div className={classes["client-side"]}>
                                        <div>
                                            <img className={classes["client-profile"]} src={clientProfile}/>
                                            <p>Client Name</p>
                                        </div>
                                        <h5>$1,000</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className={classes['swiper-slide']}>
                            <div className={classes['projects']}>
                                <img className={classes["project-picture"]} src={exampleProject}/>
                                <div className={classes["project-description"]}>
                                    <h4>Project Name</h4>
                                    <p>
                                        description:
                                        it will be best site
                                        ever for clien and
                                        developers easy money
                                        baby.
                                    </p>
                                    <br/>
                                    <div className={classes["client-side"]}>
                                        <div>
                                            <img className={classes["client-profile"]} src={clientProfile}/>
                                            <p>Client Name</p>
                                        </div>
                                        <h5>$1,000</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FeaturedProjects