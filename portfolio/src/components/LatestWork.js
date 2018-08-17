import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//components

const LatestWork = props => {
  const styles = {
    fontSize: "20px",
  }
  const renderLatestProjects = () => {
    return (
      props.projects.slice(0, 3).map((project) => {
        return (
          <a href={project.url} target="_blank" key={project.id} className="card-link">
            <Card className="card" style={{backgroundColor: "#ffffff"}}>
              <CardMedia>
              <img src={project.photo} className="post-image" alt="" />
              </CardMedia>
              <CardTitle title={project.title}
                titleStyle={styles}
                subtitle={project.subtitle} />
            </Card>
          </a>
        );
      })
    );
  }
  return (
    <div className="posts">
      <MuiThemeProvider>
        <div className="projects">
          {renderLatestProjects()}
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default LatestWork;
