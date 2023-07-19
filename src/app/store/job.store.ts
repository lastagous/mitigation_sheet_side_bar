import { Injectable } from '@angular/core';
import { JobModel, SkillModel } from '../model/job';

@Injectable()
export class JobStore {
  private _jobList: JobModel[] = [
    {
      roll: 'tank',
      name_en: 'paladin',
      name_jp: 'ナイト',
    },
    {
      roll: 'tank',
      name_en: 'warrior',
      name_jp: '戦士',
    },
    {
      roll: 'tank',
      name_en: 'darkknight',
      name_jp: '暗黒騎士',
    },
    {
      roll: 'tank',
      name_en: 'gunbreaker',
      name_jp: 'ガンブレイカー',
    },
    {
      roll: 'healer',
      name_en: 'whitemage',
      name_jp: '白魔道士',
    },
    {
      roll: 'healer',
      name_en: 'astrologian',
      name_jp: '占星術師',
    },
    {
      roll: 'healer',
      name_en: 'scholar',
      name_jp: '学者',
    },
    {
      roll: 'healer',
      name_en: 'sage',
      name_jp: '賢者',
    },
    {
      roll: 'melee',
      name_en: 'monk',
      name_jp: 'モンク',
    },
    {
      roll: 'melee',
      name_en: 'dragoon',
      name_jp: '竜騎士',
    },
    {
      roll: 'melee',
      name_en: 'ninja',
      name_jp: '忍者',
    },
    {
      roll: 'melee',
      name_en: 'samurai',
      name_jp: '侍',
    },
    {
      roll: 'melee',
      name_en: 'reaper',
      name_jp: 'リーパー',
    },
    {
      roll: 'physical-range',
      name_en: 'bard',
      name_jp: '吟遊詩人',
    },
    {
      roll: 'physical-range',
      name_en: 'machinist',
      name_jp: '機工士',
    },
    {
      roll: 'physical-range',
      name_en: 'dancer',
      name_jp: '踊り子',
    },
    {
      roll: 'magical-range',
      name_en: 'blackmage',
      name_jp: '黒魔道士',
    },
    {
      roll: 'magical-range',
      name_en: 'summoner',
      name_jp: '召喚士',
    },
    {
      roll: 'magical-range',
      name_en: 'redmage',
      name_jp: '赤魔道士',
    },
  ];
  private _checkJobList: string[] = [];
  private _skillList: SkillModel[] = [];
  private _selectedSkillList: SkillModel[] = [];
  private _initialSelectSkillList: string[] = [
    'リプライザル',
    'パッセージ・オブ・アームズ',
    'ディヴァインヴェール',
    'シェイクオフ',
    'ダークミッショナリー',
    'ハート・オブ・ライト',
    'テンパランス',
    'アサイラム',
    '運命の輪',
    'ニュートラルセクト',
    'フェイイルミネーション',
    '野戦治療の陣',
    '疾風怒濤の計',
    '展開戦術',
    '士気高揚の策',
    'サモン・セラフィム',
    'エーテルフロー',
    'ホーリズム',
    'ケーラコレ',
    'エウクラシア・プログノシス',
    'パンハイマ',
    '牽制',
    'マントラ',
    'トルバドゥール',
    '地神のミンネ',
    'タクティシャン',
    'ウェポンブレイク',
    '守りのサンバ',
    'インプロビゼーションフィニッシュ(踊りの激情0)',
    'アドル',
    'バマジク',
    'LB3',
  ];

  constructor() {}

  public get checkJobList(): string[] {
    return this._checkJobList;
  }

  public set checkJobList(value: string[]) {
    this._checkJobList = value;
  }

  public get jobList(): JobModel[] {
    return this._jobList;
  }

  public get skillList(): SkillModel[] {
    return this._skillList;
  }

  public set skillList(value: SkillModel[]) {
    this._skillList = value;
  }

  public get selectedSkillList(): SkillModel[] {
    return this._selectedSkillList;
  }

  public set selectedSkillList(value: SkillModel[]) {
    this._selectedSkillList = value;
  }

  public get initialSelectSkillList(): string[] {
    return this._initialSelectSkillList;
  }

  public getTankList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'tank');
  }

  public getHealerList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'healer');
  }

  public getMeleeList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'melee');
  }

  public getPhysicalRangeList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'physical-range');
  }

  public getMagicalRangeList(): JobModel[] {
    return this._jobList.filter((val) => val.roll == 'magical-range');
  }
}
