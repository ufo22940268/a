/**
 * Created by cc on 2019/9/20.
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { Col, DatePicker, Icon, Layout, Row, Select, Typography, } from 'antd';
import { Trans } from '@lingui/macro';
import ContributorRankingIcon from '../../../common/icons/contributor-ranking.svg';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const headerTitleStyle = css`
font-size:16px;
font-weight:500;
color:rgba(0,0,0,1);
line-height:24px;
`;

const selectorLabelStyle = css`
font-size:14px;
font-weight:400;
color:rgba(90,90,90,1);
`;

const RankingHeader = ({ projects, onSelectProject, onChangeRange, projectId, rangeStrs}) => {
  let ranges = rangeStrs.map(s => s && moment(s));
  return (
    <Header style={{
      padding: '0 16px',
      fontSize: '0.8em',
    }}
    >
      <Row type="flex" gutter={12}>
        <Col lg={13} md={4}>
          <Icon component={ContributorRankingIcon} />
          <Text style={{ marginLeft: '8px' }} css={headerTitleStyle}>
            <Trans id="ranking.header.title">Ranking</Trans>
          </Text>
        </Col>
        
        <Col lg={11} md={20} css={selectorLabelStyle}>
          <Row>
            <Col md={3} style={{ textAlign: 'right' }}>
              <span style={{
                marginRight: 10,
                textAlign: 'right',
              }}
              >
                <Trans id="ranking.header.project">Project</Trans>
              </span>
            </Col>
            
            <Col md={8}>
              <Select
                showSearch
                style={{ width: '100%' }}
                onChange={t => onSelectProject(t)}
                value={projectId}
                filterOption={(input, option) => option.props.children.toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
                }
              >
                {projects.map((p, i) => (
                  <Select.Option title={p.git_url} value={p.id} key={i}>{p.name}</Select.Option>
                ))}
              </Select>
            </Col>
            <Col md={3} style={{ textAlign: 'right' }}>
              <span style={{
                marginRight: 10,
                textAlign: 'right',
              }}
              >
                <Trans id="ranking.header.time">Time</Trans>
              </span>
            </Col>
            <Col md={10}>
              <RangePicker value={ranges} style={{ width: '100%' }} onChange={onChangeRange} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default RankingHeader;
