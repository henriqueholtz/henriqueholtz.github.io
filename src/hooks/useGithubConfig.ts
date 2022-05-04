import React, { useState, useEffect } from 'react';
import { GitHubConfig } from '../types/Config';
import axios from 'axios';
import { config } from '../config';
import { ResponseGitHubConfig } from '../types/axios';
import { RequestStats } from '../types/axios/RequestStats';

export const useGithubConfig = () => {
  const [stats, setStats] = useState<RequestStats>(RequestStats.Executing);
  const [githubConfig, setGithubConfig] = useState<GitHubConfig | null>(null);

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const { data } = await axios.get<ResponseGitHubConfig>(
          config.urlGithubApi
        );
        setGithubConfig({
          avatarUrl: data.avatar_url,
          biography: data.bio,
          company: data.company,
          email: data.email,
          name: data.name,
          location: data.location,
          repositoriesUrl: data.repos_url,
        } as GitHubConfig);
        setStats(RequestStats.Successful);
      } catch {
        setStats(RequestStats.Failed);
      }
    };
    fetchAsync();
  }, []);

  return { stats, githubConfig };
};
